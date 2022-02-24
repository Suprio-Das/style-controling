document.getElementById('add-border').addEventListener('click',function(){
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = '3px solid green';
})

// adding background to the friends
function addBackgroundColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'orange';
    }
}

// adding new friend
document.getElementById('add-friend').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.innerHTML = `
    
        <h3 class="friend-name">New Friend</h3>
        <p>Lorem ipsum dolor sit amet.</p>

    `
    friendDiv.classList.add('friend');
    container.appendChild(friendDiv);
})

// color friend names
document.getElementById('color-friend-name').addEventListener('click',function(){
    const friendName  = document.getElementsByClassName('friend-name');
    for(const friend of friendName){
        friend.style.color = 'green';
    }
})


document.getElementById('owner').addEventListener('click',function(){
    const ownerName = document.getElementById('author-info');
    ownerName.style.display = 'block';
    const ownerDelete = document.getElementById('owner-delete');
    ownerDelete.style.display = 'block';
})
document.getElementById('owner-delete').addEventListener('click',function(){
    const ownerDelete = document.getElementById('author-info');

    ownerDelete.style.display = 'none';
    const ownerDltBtn = document.getElementById('owner-delete');
    ownerDltBtn.style.display = 'none';
})

// giving padding to the friend container
document.getElementById('padding-btn').addEventListener('click',function(){
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.padding = '10px';
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.padding = '5px';
    }
})
document.getElementById('margin-btn').addEventListener('click',function(){
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.margin = '10px';
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.margin = '5px';
    }
})
document.getElementById('radius-btn').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.borderRadius = '5px';
    }
})