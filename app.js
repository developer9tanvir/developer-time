
// get elements 
const devs_form = document.getElementById('devs_form');
const devs_area = document.querySelector('.devs-area');



// Devs form submit 
devs_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let photo = this.querySelector('input[name="photo"]');

    let skills_arr = [];

    for(let i = 0; i < skill.length ; i++){
        skills_arr.push(skill[i].value);
    }

    let data_arr;
    if(dataGet('devs')){
        data_arr = dataGet('devs');
    }else{
        data_arr = [];
    }

    data_arr.push({
        name : name.value, 
        gender : gender.value, 
        skills : skills_arr,
        photo : photo.value
    });

    dataSend('devs', data_arr);
  
    allDevs();

});



allDevs();
function allDevs(){
    let all_devs = dataGet('devs');

    let data = '';
    all_devs.map(d => {

        let lists = '';

        d.skills.map(list => {
            lists += '<li class="list-group-item"> '+ list +'  </li>';
        });

        data += `

                <div class="col-md-4 my-3">
						<div class="card">
							<img style="width:100%; height:250px; object-fit: cover; " class="card-img" src="${ d.photo }" alt="">
							<div class="card-body">
								<h2>${ d.name }</h2>
								<p>Gender : ${ d.gender }</p>
								<hr>
								skills 
								<hr>
								<ul class="list-group">
                                    
                                    ${ lists }

									
								</ul>
								
							</div>
						</div>
					</div>
        
        `;

    });

    devs_area.innerHTML = data;

}
