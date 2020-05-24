const getBotton = document.getElementById('get_send')
const postBotton = document.getElementById('post_send')
const putBotton = document.getElementById('put_send')
const deleteBotton = document.getElementById('delete_send')
const contents = document.getElementById('contents')


const createContent = (array)=>{
  const table = document.createElement('table')
  array.forEach((object) =>{
    const tr = document.createElement('tr')
    for(const key in object){
      const td = document.createElement('td')
      td.textContent =object[key]
      tr.append(td)
    }
    table.append(tr)
  })
  return table
}




//------------------------------------------------------get
async function get(url){
 
  return await fetch(url)
                    .then(res => res.json())
                    .then(result =>{ 
                     return result
                     })
                  .then(result =>   result.characters )

       
}

getBotton.addEventListener('click',async ()=>{
  contents.textContent = ''
  const name = document.getElementById('get_name').value
  const limit = Number(document.getElementById('get_limit').value)
  let url 

  if(name !== '' && limit !== 0){
    url = `http://localhost:3000/characters/${name}/?limit=${limit}`
  }else if(name !== ''){
    url = `http://localhost:3000/characters/${name}`
  }else if(limit !== 0){
    url = `http://localhost:3000/characters?limit=${limit}`
  }else{
    url = `http://localhost:3000/characters`
  }
  
  const result =  await get(url)
                .then(result =>{
                  return  createContent(result)
                })
  document.getElementById('get_name').value = ''
  document.getElementById('get_limit').value = ''
   contents.append(result)
})
//--------------------------------------------------post
async function post(name,title,type){
  return await fetch(`http://localhost:3000/characters`,{
    method:'POST',
    body: JSON.stringify({
      name,
      title,
      type
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(result => result.characters)
  .then(result =>result)
}


postBotton.addEventListener('click',async ()=>{
  contents.textContent = ''
  const type = document.getElementById("post_type").value
  const title = document.getElementById("post_title").value
  const name = document.getElementById('post_input').value
  
  const result =  await post(name,title,type)
                .then(result =>{
                  return  createContent(result)
                })
  
   contents.append(result)
   document.getElementById('post_input').value = ''
})
//-----------------------------------------------put
async function put(name,title_value,type_value,target){
  return await fetch(`http://localhost:3000/characters/${target}`,{
    method:'PUT',
    body: JSON.stringify({
      name,
      title_value,
      type_value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(result => result.characters)
  .then(result =>result)
}


putBotton.addEventListener('click',async ()=>{
  contents.textContent = ''
  const target = document.getElementById('search_input').value
  const name = document.getElementById('put_name').value
  const title_value = document.getElementById('put_title').value
  const type_value = document.getElementById('put_type').value

  console.log(target)
  console.log(name)
  console.log(title_value)
  console.log(type_value)
  
  const result = await put(name,title_value,type_value,target)
                      .then(result =>{
                        return  createContent(result)
                      })
   document.getElementById('search_input').value = ''
   document.getElementById('put_name').value = ''
   contents.append(result)
})

//-----------------------------------------------------
async function del(target){
  return await fetch(`http://localhost:3000/characters/${target}`,{
    method:'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(result => result.characters)
  .then(result =>result)
}

deleteBotton.addEventListener('click',async ()=>{
  contents.textContent = ''
  const target = document.getElementById('delete_target').value
  const result = await del(target)
                      .then(result =>{
                        return  createContent(result)
                      })

   contents.append(result)
   document.getElementById('delete_target').value = ''
})