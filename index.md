<!DOCTYPE html>
<html>
<head>
<title>digits</title>
</head>
<body>

<h1>digits</h1>
<p>
<img src="/doc/homepage.JPG" alt="homepage image" width= "552" height="306">
</p>

<p>This digits application enables users to:
<li>Create their own account</li>
<li>Create and edit an address book to save their contacts</li>
<li>Add notes that have timestamps</li>
</p>


<h4>Installation</h4>
<ol>
  <li>In order to begin using the application you will need to 
    <a href="https://www.meteor.com/install"> install Meteor </a>
  </li>
  <li>Next, you will need to 
    <a href="https://github.com/tylerchinen/digits">download a copy of digits</a>. 
  You should note that the digits repo is private and that you will need to request permission from the author in order to access the repo.
  </li>
  <li>Then, in the command prompt you will need to cd into the app directory (within the digits file) and install the Meteor library as follows: 
    <p>
      <code>meteor npm install</code>
    </p>
  </li>
  <li>After Meteor has been installed, you can then run the application by using:
    <p>
      <code>meteor npm run start</code>
    </p>
  </li>
  <li>After the app runs for the first time, it will create some default data and users. The output should look as follows:
    <p>
    <pre class="highlight">
      <code>
      meteor npm run start
      
      > meteor-application-template-react@ start /Users/philipjohnson/github/philipmjohnson/digits/app
      > meteor --no-release-check --settings ../config/settings.development.json
      
      [[[[[ ~/github/philipmjohnson/digits/app ]]]]]
      
      => Started proxy.                             
      => Started MongoDB.                           
      I20180305-18:06:02.764(-10)? Creating the default user(s)
      I20180305-18:06:02.803(-10)?   Creating user admin@foo.com.
      I20180305-18:06:02.803(-10)?   Creating user john@foo.com.
      I20180305-18:06:02.804(-10)? Creating default contacts.
      I20180305-18:06:02.804(-10)?   Adding: Johnson (john@foo.com)
      I20180305-18:06:02.804(-10)?   Adding: Casanova (john@foo.com)
      I20180305-18:06:02.804(-10)?   Adding: Binsted (admin@foo.com)
      => Started your app.
      
      => App running at: http://localhost:3000/
      W20180305-18:06:02.805(-10)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
      W20180305-18:06:02.805(-10)? (STDERR) While this implementation will work correctly, it is known to be
      W20180305-18:06:02.806(-10)? (STDERR) approximately three times slower than the native implementation.
      W20180305-18:06:02.806(-10)? (STDERR) In order to use the native implementation instead, run
      W20180305-18:06:02.806(-10)? (STDERR) 
      W20180305-18:06:02.806(-10)? (STDERR)   meteor npm install --save bcrypt
      W20180305-18:06:02.806(-10)? (STDERR) 
      W20180305-18:06:02.806(-10)? (STDERR) in the root directory of your application.
      
      Note regarding bcrypt warning. You will also get the following message when you run
      </code>
      </pre>
    </p>
  
  </li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  
  

</ol>



</body>
</html>