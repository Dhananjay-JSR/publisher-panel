
  //Rendering the content of the page
  function changeContentBrowser(template_id , need_fetchting_data = false,function_callback = ()=>{}){
    let parent = document.getElementById("content-browser");
    if (need_fetchting_data){
      parent.innerHTML = '';
      parent.append(document.getElementById("loader-template").content.cloneNode(true))
      document.title = document.getElementById("loader-template").getAttribute('data-page-title');
      loadTemplate();
      async function loadTemplate(){
        let data = await fetch(`https://deelay.me/5000/https://splendid-zephyr-production-94b4.up.railway.app/user`);    //Stimulate Slow Response
        let data_received = await data.json();
        parent.innerHTML = '';
        await parent.append(document.getElementById(template_id).content.cloneNode(true))
        function_callback(data_received);
        document.title = document.getElementById(template_id).getAttribute('data-page-title');
      }
    }else{
      parent.innerHTML = '';
      parent.append(document.getElementById(template_id).content.cloneNode(true))
      function_callback();
      document.title = document.getElementById(template_id).getAttribute('data-page-title');
  
    }
  }


  
  
  document.getElementById('my-account-btn-call').addEventListener('click',()=>{
    changeContentBrowser('profile-template',true,(data)=>{
      document.getElementById('user-name-header').innerText=`Welcome ${data[0].name}`
      document.getElementById('name').innerText=`${data[0].name}`
      document.getElementById('email').innerText=`${data[0].email}`
      document.getElementById('phone').innerText=`${data[0].number}`
      document.getElementById('address').innerText=`${data[0].number}`
      document.getElementById('bank-acc-name-id').innerText=`${data[0].bank_details.accName}`
      document.getElementById('bank-number-id').innerText=`${data[0].accNumber}`
      document.getElementById('bank-name-id').innerText=`${data[0].bankName}`
      document.getElementById('bank-address').innerText=`${data[0].bank_details.bankAddr}`
      document.getElementById('bank-ifsc-id').innerText=`${data[0].bank_details.bankIFSC}`
    });
  })
  
  
  document.getElementById('faq-btn-call').addEventListener('click',()=>{
    changeContentBrowser('FAQ-template');
  })
  
  document.getElementById('contact-us-btn-call').addEventListener('click',()=>{
    changeContentBrowser('contact-us-template');
  })
  

    // Earning Starts here

    document.getElementById('my-earning-btn').addEventListener('click',()=>{
      changeContentBrowser('my-earning-template',true,earning_event_attacher);
    
     
    })
  
  document.getElementById('my-earning-btn-call').addEventListener('click',()=>{
    changeContentBrowser('my-earning-template',true,earning_event_attacher);
  
   
  })
  
  function earning_event_attacher(){
      
    document.getElementById("Orders_title_btn").addEventListener('click',()=>{
      document.getElementById('my-earning-content').style.display="block";
      document.getElementById('Orders_title_btn').classList.add('my-earning-toggle-active')
      document.getElementById('Invoices_title_btn').classList.remove('my-earning-toggle-active')
     
    })
      document.getElementById('Invoices_title_btn').addEventListener('click',()=>{
        document.getElementById('my-earning-content').style.display="none";
        document.getElementById('Invoices_title_btn').classList.add('my-earning-toggle-active')
        document.getElementById('Orders_title_btn').classList.remove('my-earning-toggle-active')
      })
  }


  // Earning ^^ Ends here

document.getElementById('logout-no').addEventListener('click',()=>{
  document.getElementById('modal-toggle').style.display="none";
})



document.getElementById('logout-btn').addEventListener('click',()=>{

  document.getElementById('modal-toggle').style.display="block";


})

document.getElementsByClassName('navbar-logo-text')[0].addEventListener('click',()=>{
  changeContentBrowser('welcome-template',true);
})


//Dynamic Loading My Book Content

document.getElementById('my-bok-btn').addEventListener('click',()=>{
  changeContentBrowser('my-book-template',true,add_my_Book_content_dynamically);
})

function add_my_Book_content_dynamically(data){
 //TODO: REMOVE THIS BEFORE PRODUCTION
  data = data[0].books
  let book_content = document.getElementById('my-book-dynamic-content');
  if(data.length > 0){
  data.map((e)=>{
    let template_content = document.getElementById('my-book-dynamic-template').content.cloneNode(true)
    template_content.getElementById('my_book_stocks').innerText = e.book_stocks;
    template_content.getElementById('my_book_name').innerText = e.book_name;
    template_content.getElementById('my_book_image').innerText = e.book_image;
    template_content.getElementById('my_book_mrp').innerText = e.book_MRP;
    template_content.getElementById('my_book_sale').innerText = e.book_sale;
    book_content.append(template_content);
  })

}
  else{
    book_content.append(document.getElementById('template-not-records-found').content.cloneNode(true));
  }
}

//Dynamic Loading My Book Content End
  




//Dynamic Loading My Customer Content

document.getElementById('my-cus-btn').addEventListener('click',()=>{
  changeContentBrowser('my-customer-template',true,add_my_Customer_content_dynamically);
})

function add_my_Customer_content_dynamically(data){
 //TODO: REMOVE THIS BEFORE PRODUCTION
 data = data[0].customer
  let dynamic_customer_content_holder = document.getElementById('my-customer-dynamic-content');
  if(data.length > 0){
  data.map((e)=>{
    let template_content = document.getElementById('my-customer-dynamic-template').content.cloneNode(true)
    template_content.getElementById('customer-holder-id').innerText = e;
    dynamic_customer_content_holder.append(template_content);
  })

}
  else{
    dynamic_customer_content_holder.append(document.getElementById('template-not-records-found').content.cloneNode(true));
  }
}

//Dynamic Loading My Customer Content


//Dynamic Loading Sale Content

document.getElementById('sale-report-btn').addEventListener('click',()=>{
  changeContentBrowser('sale-report-template',true,add_sale_content_dynamically);
})

function add_sale_content_dynamically(data){
  data="test"; //TODO: REMOVE THIS BEFORE PRODUCTION
  let dynamic_template_holder = document.getElementById('sale-report-dynamic-content');
  if(data.length > 0){
  for (i=0 ; i<100 ; i++){
    dynamic_template_holder.append(document.getElementById('sale-report-dynamic-template').content.cloneNode(true));
  }}
  else{
    dynamic_template_holder.append(document.getElementById('template-not-records-found').content.cloneNode(true));
  }
}

//Dynamic Loading Sale Customer Content



//Dynamic Loading Order Content

document.getElementById('my-order-btn').addEventListener('click',()=>{
  changeContentBrowser('order-report-template',true,add_order_content_dynamically);
})

function add_order_content_dynamically(data){
  data="test"; //TODO: REMOVE THIS BEFORE PRODUCTION
  let dynamic_template_holder = document.getElementById('order-report-dynamic-content');
  if(data.length > 0){
  for (i=0 ; i<100 ; i++){
    dynamic_template_holder.append(document.getElementById('order-report-dynamic-template').content.cloneNode(true));
  }}
  else{
    dynamic_template_holder.append(document.getElementById('template-not-records-found').content.cloneNode(true));
  }
}

//Dynamic Loading Order Content



//Dynamic Loading My Settlement Content

document.getElementById('my-settlement-btn').addEventListener('click',()=>{
  changeContentBrowser('my-settlement-template',false,add_my_settlement_content_dynamically);
})

function add_my_settlement_content_dynamically(data){
  data="s"; //TODO: REMOVE THIS BEFORE PRODUCTION
  let dynamic_template_holder = document.getElementById('my-settlement-dynamic-content-holder');
  if(data.length > 0){
  for (i=0 ; i<100 ; i++){
    dynamic_template_holder.append(document.getElementById('my-settlement-dynamic-template').content.cloneNode(true));
  }}
  else{
    dynamic_template_holder.append(document.getElementById('template-not-records-found').content.cloneNode(true));
  }
}

//Dynamic Loading My Settlement Content ends here


document.getElementById('add-btn').addEventListener('click',()=>{
  changeContentBrowser('add-books-template');
  
document.getElementById('submit-btn-book').addEventListener('click',()=>{
  let lastIndex;
  axios({
    method: 'get',
    url: 'http://localhost:3000/books'
  })
  .then((GETres)=>{
    console.log(GETres);
    if(GETres.data.length===0){
      lastIndex=0
    }
    else
    {
   lastIndex = GETres.data[GETres.data.length-1].id
    }

    axios({
      method:'post',
      url: 'http://localhost:3000/books',
      data:{
        "id": lastIndex+1,
        "book_image": "https://picsum.photos/id/2/200/300",
        "book_name": `${document.getElementById("add-book-name-input").value}`,
        "book_stocks": `${document.getElementById("add-book-stocks-input").value}`,     
        "book_MRP": `${document.getElementById("add-book-mrp-input").value}`, 
        "book_sale": `${document.getElementById("add-book-sale-input").value}`
      }
    })
    .then((POSTres)=>{
      window.alert("DATA SUBMITTED SUCCESFULLY")
    })
    .catch((POSTerr)=>{
      window.alert("Error Code (2)")
    }
    )
  })
  .catch((GETerr)=>{
    window.alert("Error Code (1)")

  })


})
  document.getElementById('book-image-picker').onchange = function(e) {
    document.getElementById('book-image-picker-show').src= URL.createObjectURL(e.target.files[0]);
    document.getElementById('book-image-picker-show').style.display="block"
  }
})



function login_form_btn_script(){

  document.getElementById('login_content_browser').style.display='none'
  document.getElementById('content-browser').classList.remove('hidden')
  document.getElementById('profile-image').classList.remove('hidden')
  document.getElementById('sidebar_tag').classList.remove('hidden')
  document.getElementById('navbar-search-holder').classList.remove('hidden')
  document.getElementById('nav-msg-container').classList.remove('hidden')
  document.getElementById('body_design').classList.remove('hidden')
  changeContentBrowser('welcome-template',true);
  if (document.getElementById('remember_me_checkbox').checked){
    localStorage.setItem('remember-me','true')
  }
  else{
    localStorage.setItem('remember-me','false')
  }
}

document.getElementById('logout-yes').addEventListener('click',()=>{
  document.getElementById('login_content_browser').style.display='grid'
  document.getElementById('content-browser').innerHTML=""
  document.getElementById('profile-image').classList.add('hidden')
  document.getElementById('sidebar_tag').classList.add('hidden')
  document.getElementById('navbar-search-holder').classList.add('hidden')
  document.getElementById('nav-msg-container').classList.add('hidden')
  document.getElementById('body_design').classList.add('hidden')
  document.getElementById('modal-toggle').style.display="none";
  localStorage.setItem('remember-me','false')
  document.title="Publisher Panel"
})

window.onload = function(){ 
 

  if (localStorage.getItem('remember-me')==='true')
  {
    document.getElementById('login_content_browser').style.display='none'
    document.getElementById('content-browser').classList.remove('hidden')
    document.getElementById('profile-image').classList.remove('hidden')
    document.getElementById('sidebar_tag').classList.remove('hidden')
    document.getElementById('navbar-search-holder').classList.remove('hidden')
    document.getElementById('nav-msg-container').classList.remove('hidden')
    document.getElementById('body_design').classList.remove('hidden')
    changeContentBrowser('welcome-template',true);
  }
}