let comments = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
]

        const wrapper = document.getElementById('wrapper')

        const deletePost = (id) => {

            const post = document.getElementById(id)
            post.remove()
        }




       const renderData = (data) => {
        const card =document.createElement('div')
        card.classList.add('card');
        card.setAttribute('id',data.id);
       

       card.innerHTML = 
       `<h2>${data.name}</h2>
          <p>${data.email}</p>
          <p>${data.body}</p>
          <button onclick="deletePost(${data.id})">Delete</button>`

          wrapper.appendChild(card)
       }

       for (let i = 0; i < comments.length; i++) {
        renderData(comments[i])

    }
    
    const postForm = document.getElementById('postForm')

    postForm.addEventListener('submit', (e) => {

        e.preventDefault()

        const cardId = document.getElementById('card_id').value
        const postId = document.getElementById('post_id').value
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const body = document.getElementById('body').value

        const post = {
            postId,
            id: cardId,
            name,
            email,
            body
        }

        posts.push(post)
        renderData(post)
    })


    //დავალება2
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length;
    console.log(fruits);



    const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop();
    console.log(fruits1);


//დავალება3
    const persons = [
        { name: 'John', surname: 'Doe', age: 25, profession: 'Engineer', score: 80 },
        { name: 'Jane', surname: 'Smith', age: 30, profession: 'Teacher', score: 95 },
        { name: 'Alice', surname: 'Johnson', age: 40, profession: 'Doctor', score: 90 }
      ];



