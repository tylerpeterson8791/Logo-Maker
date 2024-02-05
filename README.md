# Logo Maker
  
  ## Description
  
  My motivation for this project was to make a simple logo generator.  This helped me hone in my class and subclass skills developing this app to render user data into a readable SVG file to generate a simple logo.

  In addition to practicing using classes and sub-classes, this was a valuable lesson in the advantages to using multiple modules.
  
  
  ## Installation
  
  This was a "from scratch" project so my first step was pseudocoding and setting up the file directories.  Once that was complete I built out the Inquirer prompt to gather the user data.

  After that was complete I built out my class structure using Shapes as my parent class with three sub-classes of circle, triangle and square.

  Once my class structure was complete I needed flush out my logic for construction in the createLogo function.  This entailed doing research on how SVG files were structured and where I needed to populate the user data within them.

  At this point I was hours into working on this when it became unruly to deal with this in one large js file.  I made the decision to split each class into a different module as well as splitting out the createLogo function.

  It took some time to get reconfigured and setup with the adjusted variables and require statements, but once it was all in place it became a much easier process to code and troubleshoot.  I wish I would've started with this approach.  Now that I've done this I truly see the advantages to using multiple smaller modules.

  Once everything was set up I built out some tests to check rendering functionality to make sure the file was writing correctly.

  Here's a video showing functionality of application while building an example logo: [Functionality Video](https://drive.google.com/file/d/1EjTogeJR14OxafQDW2bj6CvdWcgvUs7y/view?usp=sharing)

  ## Usage
  
  The user begins and is prompted for what letters they want in their logo.  This is set to a limit of three.  If the user enters more they are prompted to try again with an error indicator.
  Then they are asked which color they want the letters to be.  
  The shape of the logo is the next prompt.  This is a list option with three possible shapes in circle, triangle or square.
  Finally the user is asked which color they want the logo itself to be.  Once that is entered the SVG file is written and the user is greeted with either 'Success!' or an Error message.
  
  ![Logo-Maker Terminal ScreenShot](https://github.com/tylerpeterson8791/Logo-Maker/assets/75902133/7c6375ef-32aa-46eb-afdc-6e1974f6bb04)

  Once the file is generated the user can view their logo in SVG format!
 
  ![Logo-Maker Logo Sample](https://github.com/tylerpeterson8791/Logo-Maker/assets/75902133/a2585351-80ca-4263-8f2e-10d9be539c9b)


  ## Credits

  There’s a few resources I referenced during the course of creating this project.  

  When setting up the classes I needed to do some research on the operators super and constructor.  This MDN Web Doc was a big help with the nuts and bolts of that.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

  When setting up the createLogo function I needed to pare down my logic and streamline it.  After some research I came across switch and case statements as the solution.  This W3 schools basic document saved me alot of time and headaches.
  https://www.w3schools.com/js/js_switch.asp

  The SVG examples and documentation provided by the BootCamp were great reference points when constructing the SVG file.

  Shout out to https://147colors.com/ on their super cool website that shows a visualization of all the possible color keywords.

  Finally a big thanks for my instructor Gary for explaining things so well in class and for extending the deadline of this project to 1/26!
