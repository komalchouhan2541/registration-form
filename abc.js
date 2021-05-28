const form=document.getElementById('form');
const fname=document.getElementById('fname');
const lname =document.getElementById('lname');
const company=document.getElementById('company');
const email=document.getElementById('email');
const M_no=document.getElementById('M_no');
const sub=document.getElementById('sub');
const image=document.getElementById('image')

const btn=document.getElementById('btn');
const todo=document.getElementById('todo');


let array=[];

btn.addEventListener('click',function(e){
    e.preventDefault()
    // console.log(" Successfull ")
    addtodo()
})

function addtodo(){
    const f=fname.value;
    const l=lname.value;
    const c= company.value;
    const e= email.value;
    const m= M_no.value;
    const s= sub.value;
    // const i= image.value;
    // console.log(f)
    // console.log(l)
    // console.log(c)
    // console.log(e)
    // console.log(m)
    // console.log(s)
    // console.log(i)
    if(!f)return;

            if(!l)return;
              
                    if(!c)return;

                        if(!e)return;
                        
                            if(!m)return;
                            
                                if(!s)return;

                                //   if(!i)return;

                                            var data={
                                            text:f,
                                            complete:false,
                                            text1:l,
                                            text2:c,
                                            text3:e,
                                            text4:m,
                                            text5:s,
                                            // i_mg:i
                                            }

        // console.log(data)      
   array.push(data);
    
//    console.log(array)
   render()
}


  function render(){

                todo.innerHTML=null;
            for( let i=0; i<array.length;i++){
                const item=document.createElement("li");

                const checkbox=document.createElement("input");
                checkbox.type="checkbox";


                //  check box event
                checkbox.addEventListener('click',function(e){
                    array[i].complete=e.target.checked;

                    if(array[i].complete){
                        item.classList.add("completed");
                        item.classList.remove("uncompleted");
                        checkbox.checked=array[i].complete
                    }
                    else{
                        item.classList.add("uncompleted");
                        item.classList.remove("completed");
                        checkbox.checked=array[i].complete
                    }
                })



                
                //  const img=document.createElement("img");
                //  img.src=array[i].i_mg;
               


                const f_tx=document.createElement("p")
                f_tx.innerText=array[i].text;
                
                const l_tx=document.createElement("p")
                l_tx.innerText=array[i].text1;
                
                const c_tx=document.createElement("p")
                c_tx.innerText=array[i].text2;
                
                const e_tx=document.createElement("p")
                e_tx.innerText=array[i].text3;
                
                const m_tx=document.createElement("p")
                m_tx.innerText=array[i].text4;
                
                const s_tx=document.createElement("p")
                s_tx.innerText=array[i].text5;

                const dlt=document.createElement("button")
                dlt.innerText="Delete";

                // delete cllick event
                dlt.addEventListener("click",function(e){
                array.splice(i,1);
                render();
                // console.log("delet")
                })


                item.appendChild(checkbox);
                // item.appendChild(img);
                item.appendChild(f_tx);
                item.appendChild(l_tx);
                item.appendChild(c_tx);
                item.appendChild(e_tx);
                item.appendChild(m_tx);
                item.appendChild(s_tx);
                item.appendChild(dlt);
                todo.appendChild(item);
                // image.value=null;
                fname.value=null;
                lname.value=null;
                company.value=null;
                email.value=null;
                M_no.value=null;
                sub.value=null;
                
            }

  }
