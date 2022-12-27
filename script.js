var form_submit = document.querySelector('#form_submit')
form_submit.addEventListener('submit',(e)=>{
    e.preventDefault()
    var firstname = document.querySelector('[placeholder="First Name"]')
    var lastname = document.querySelector('[placeholder="Last Name"]')
    var address = document.querySelector('[placeholder="Address"]')
    var city = document.querySelector('[placeholder="City"]')
    console.log('form submitted');
    console.log(firstname,lastname,address,city);
    var datas = [firstname,lastname,address,city]
    var creating_tr = document.createElement('tr')

    for(i=0;i<4;i++){
        var creating_td = document.createElement('td')
        creating_td.innerText = datas[i].value
        creating_tr.append(creating_td)
    }
    document.querySelector('tbody').append(creating_tr)
    for(let i of datas){
        i.value = ''
    }
})
