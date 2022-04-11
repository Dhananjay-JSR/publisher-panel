
      // SideBar NavBar Program
      let profile_image_expander = document.getElementById("profile-image-expander");
      let profile_image_expand = false;
      let profile_image = document.getElementById("profile-image");
      
      
      profile_image.addEventListener("click", function () {
        if (profile_image_expand) {
          profile_image_expander.style.display = "none";
          profile_image_expand = false;
        } else {
          profile_image_expander.style.display = "block";
          profile_image_expander.classList.add("expander-active");
          profile_image_expand = true;
        }
      });
      document.addEventListener("mouseup", function (e) {
        if (
          !profile_image_expander.contains(e.target) &&
          !profile_image.contains(e.target)
          ) {
            profile_image_expander.style.display = "none";
            profile_image_expand = false;
          }
        });
        
        
        let notify_expander = document.getElementById("notify-expander");
        let notify_expand = false;
        let notify = document.getElementById("nav-msg-container");
        notify.addEventListener("click", function () {
          if (notify_expand) {
            notify_expander.style.display = "none";
            notify_expand = false;
          } else {
            notify_expander.style.display = "block";
            notify_expander.classList.add("expander-active");
            notify_expand = true;
          }
        });
        document.addEventListener("mouseup", function (e) {
          if (
            !notify_expander.contains(e.target) &&
            !notify.contains(e.target)
            ) {
              notify_expander.style.display = "none";
              notify_expand = false;
            }
          });
          
          let sidebar = document.getElementById("sidebar_tag")
          sidebar.addEventListener('mouseover',()=>{
            if(!sidebar_pinned)
            {

              sidebar.classList.add('reveal-sidebar')
              sidebar.classList.remove('collapse-sidebar')
            }
            

          })

          sidebar.addEventListener('mouseout',()=>{
            if(!sidebar_pinned)
            {
            sidebar.classList.remove('reveal-sidebar')
            sidebar.classList.add('collapse-sidebar')
            }

          })

          let root = document.documentElement;
          document.addEventListener('mousedown',(ev)=>{
            let el= ev.target
            let x = (ev.clientX-el.offsetLeft)/el.offsetWidth;
            let y = (ev.clientY-el.offsetTop)/el.offsetHeight;
            root.style.setProperty('--ripple-x',x)
            root.style.setProperty('--ripple-y',y)
          })

          let sidebar_pinned=false
          let content_screen= document.getElementById('content-browser')
          let pin_me_btn=document.getElementById('pin-me-btn')
          pin_me_btn.addEventListener('click',()=>{
            if(sidebar_pinned){
              sidebar.classList.remove('reveal-sidebar')
            sidebar.classList.add('collapse-sidebar')
            content_screen.style.marginLeft="84px"
          
            setTimeout(() => {
                sidebar_pinned=false
                
              }, 100);
            }
            else{
              sidebar.classList.add('reveal-sidebar')
              sidebar.classList.remove('collapse-sidebar')
              sidebar_pinned=true
              content_screen.style.marginLeft="325px"


            }
          })

           // SideBar NavBar Program End
