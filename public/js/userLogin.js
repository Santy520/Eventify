const loginFormHandler = async (e) => {
  e.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert("Invalid login");
    }
  }
};

const signupFormHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert("Invalid signup");
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);


// // Function to set up a new account
// const signUp = async () => {
//     console.log('Sign Up');
//     const username = readline.question('Enter your username: ');
//     const email = readline.question('Enter your email: ');
//     const password = readline.question('Enter your password: ', { hideEchoBack: true });
//     const hashedPassword = await bcrypt.hash(password, 10);
//     try {
//         // Create user record in the database
//         const user = await User.create({
//           username,
//           email,
//           password: hashedPassword
//         });
//         console.log('Account created successfully. Welcome, ' + user.username + '!');
//       } catch (error) {
//         console.error('Error creating account:', error.message);
//       }
// };

// // Function to login
// const login = async () => {
//     console.log('Login');
//     const loginType = readline.question('Login using user ID or email : ');
//     let user;
//     if (loginType === 'id') {
//       const userId = readline.question('Enter your user ID: ');
//       user = await User.findByPk(userId);
//     } else if (loginType === 'email') {
//       const email = readline.question('Enter your email: ');
//       user = await User.findOne({ where: { email } });
//     } else {
//       console.error('Invalid login type. Please enter "User Id" or "email address".');
//       return;
//     }
  
//     if (!user) {
//       console.error('User not found. Invalid credentials !!');
//       return;
//     }
  
//     const password = readline.question('Enter your password: ', { hideEchoBack: true });
//     const isPasswordValid = await bcrypt.compare(password, user.password);
  
//     if (isPasswordValid) {
//       console.log('Login successful. Welcome back, ' + user.username + '!');
//     } else {
//       console.error('User not found. Invalid credentials !!');
//     }
// };
  
// // Main function
// const main = async () => {
//     console.log('Welcome to the Event Management App');
//     const action = readline.question('Would you like to sign up or login? (signUp/login): ');
  
//     if (action === 'signUp') {
//       await signUp();
//     } else if (action === 'login') {
//       await login();
//     } else {
//       console.error('Invalid action !! Please signUp or login to continue.');
//     }
// };
  
// // Execute the main function
// main();