const initState = {
    posts:[
        {id:'1', title:'Squirtle Laid an Egg', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo, eligendi, rem sit voluptates expedita id labore provident amet architecto dignissimos earum recusandae iusto corrupti commodi corporis quis, eius optio.'},
        {id:'2', title:'Charmander Laid an Egg', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum adipisci maxime ad ea tempore necessitatibus consectetur voluptate esse at enim dolor, aperiam doloremque saepe dolores sequi? Veritatis quibusdam dolores deleniti.'},
        {id:'3', title:'a Helix Fosil was found', body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae impedit reprehenderit fugiat at? Assumenda expedita corporis aperiam, ipsa at laborum dolores dolor hic. Quidem totam quae non ex illum!'}
    ]
    
}


const rootReducers = (state = initState , action) => {
    
    if(action.type === "DELETE_POST"){
        let newPost = state.posts.filter(post => {
            return post.id !== action.id
        });

        return {
            ...state,
            posts:newPost
        }
    }
    
    return state
    
}

export default rootReducers;