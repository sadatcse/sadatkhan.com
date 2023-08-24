const main_cointainer=document.getElementById('main_tag');

const nav_items_update=document.getElementById('nav-items-update');


function clear(){
    main_cointainer.innerHTML='';

}

function nav_active(pagename) {
    console.log(pagename);
}


// Inside your JavaScript file (e.g., modal.js)

// Function to handle active class changes
function nav_active(selectedTab) {
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Remove "active" class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  
    // Add "active" class to the selected link
    const selectedLink = document.getElementById(`${selectedTab}-link`);
    if (selectedLink) {
      selectedLink.classList.add('active');
    }
  
    // Update main content based on the selected tab
    const mainContainer = document.getElementById('main_tag');
    mainContainer.innerHTML = getMainContent(selectedTab);
  }
  
  // Function to get main content based on the selected tab
  function getMainContent(selectedTab) {
    let content = '';
    
    switch (selectedTab) {
      case 'home':
        content = `
        <div class="my-5">
        <div class="row justify-content-between align-items-start">
          <div class="col-md-7">
            <h1 class="custom-text">Hello ,I am Sadat Khan</h1>
            <h1 class="fs-1 fw-bold">I build things for the web.</h1>
            <div class="text-success">
            <P class="fs-5">I am a dedicated professional specializing in crafting immersive digital experiences for the online world. With a clear vision of evolving into a proficient software engineer, I have developed a profound expertise in technologies including Node.js, React, Next.js, and MongoDB. My journey spans over the past 7 years, encompassing 5 years as a skilled WordPress developer, and an additional 2 years of recent accomplishments.</P>

              <P class="fs-5">Throughout my career, I have adeptly harnessed the power of modern JavaScript and TypeScript, excelling in both backend and frontend development. This diverse skill set empowers me to efficiently code websites and applications that resonate with the latest cutting-edge trends. My unwavering commitment to constructing state-of-the-art, intuitive, and user-friendly digital solutions reflects my genuine passion for my craft.</P>
              
              <P class="fs-5">I am confident that my proficiency and unwavering dedication would significantly contribute to your organization's aspirations and endeavors.</P>
            </div>
              <div class="d-flex mt-2">
                <button class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#hiremodal">Hire Me</button>
                <button class="btn btn-danger ms-2">RESUME</button>
              </div>

              <div class="social-icons mt-3">
                <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.messenger.com/" target="_blank"><i class="fab fa-facebook-messenger"></i></a>
                <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank"><i class="fab fa-whatsapp"></i></a>
              </div>
          </div>
          <div class="col-md-5 mt-5">
            <img src="/Images/sadat khan picture round.png" alt="Banner Image" class="img-fluid">
          </div>
        </div>
      </div>
        `;
        break;
      case 'projects':
        content = `
          <h1>Projects Content</h1>
          <p>This is the projects page content.</p>
        `;
        break;
      // Add cases for other tabs
      
      default:
        content = '<p>Page content not available.</p>';
    }
    
    return content;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item');
  
    // Attach click event listeners to navigation links
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      if (link) {
        link.addEventListener('click', function() {
          const tabId = link.getAttribute('id').replace('-link', '');
          nav_active(tabId);
        });
      }
    });
  });
  