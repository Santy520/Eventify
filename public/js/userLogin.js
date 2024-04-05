// Import modules and models



// Function to set up a new account
const signUp = async () => {
    console.log('Sign Up');
    const username = readline.question('Enter your username: ');
    const email = readline.question('Enter your email: ');
    const password = readline.question('Enter your password: ', { hideEchoBack: true });
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        // Create user record in the database
        const user = await User.create({
          username,
          email,
          password: hashedPassword
        });
        console.log('Account created successfully. Welcome, ' + user.username + '!');
      } catch (error) {
        console.error('Error creating account:', error.message);
      }
};

// Function to login
const login = async () => {
    console.log('Login');
    const loginType = readline.question('Login using user ID or email : ');
    let user;
    if (loginType === 'id') {
      const userId = readline.question('Enter your user ID: ');
      user = await User.findByPk(userId);
    } else if (loginType === 'email') {
      const email = readline.question('Enter your email: ');
      user = await User.findOne({ where: { email } });
    } else {
      console.error('Invalid login type. Please enter "User Id" or "email address".');
      return;
    }
  
    if (!user) {
      console.error('User not found. Invalid credentials !!');
      return;
    }
  
    const password = readline.question('Enter your password: ', { hideEchoBack: true });
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (isPasswordValid) {
      console.log('Login successful. Welcome back, ' + user.username + '!');
    } else {
      console.error('User not found. Invalid credentials !!');
    }
};
  
// Main function
const main = async () => {
    console.log('Welcome to the Event Management App');
    const action = readline.question('Would you like to sign up or login? (signUp/login): ');
  
    if (action === 'signUp') {
      await signUp();
    } else if (action === 'login') {
      await login();
    } else {
      console.error('Invalid action !! Please signUp or login to continue.');
    }
};
  
// Execute the main function
main();