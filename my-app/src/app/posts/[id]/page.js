const posts = [
    {id:1, title:'my first post',description:'welcome to my first post'},
    {id:2, title:'my 2nd post',description:'welcome to my 2nd post'},
    {id:3, title:'my 3rd post',description:'welcome to my 3rd post in gkp'}
]
export default async function PostDetails({params}) {
    const {id} = await params;
    const post = posts.find((items)=>items.id===Number(id))
    if(!post){
        return <h1>post not found</h1>
    }
    return(
        <div>
            <h1>Post details{post.title}</h1>
            <p> wlc to kushinagar{post.description}</p>
        </div>
    )
    
}