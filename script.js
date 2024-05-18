function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText === '') {
        return;
    }

    const commentsContainer = document.getElementById('comments');

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const userImg = document.createElement('img');
    userImg.src = 'path/to/default-user-image.jpg'; // Caminho para uma imagem de usuário padrão
    userImg.alt = 'User Image';

    const commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');

    const userName = document.createElement('strong');
    userName.textContent = 'User'; // Você pode substituir pelo nome do usuário

    const commentTextP = document.createElement('p');
    commentTextP.textContent = commentText;

    const commentTime = document.createElement('span');
    commentTime.textContent = 'agora mesmo';

    const replyLink = document.createElement('a');
    replyLink.href = '#';
    replyLink.textContent = 'Responder';

    commentContent.appendChild(userName);
    commentContent.appendChild(commentTextP);
    commentContent.appendChild(commentTime);
    commentContent.appendChild(replyLink);

    const commentActions = document.createElement('div');
    commentActions.classList.add('comment-actions');

    const moreActions = document.createElement('span');
    moreActions.textContent = '...';

    const likeAction = document.createElement('span');
    likeAction.textContent = '♥';

    commentActions.appendChild(moreActions);
    commentActions.appendChild(likeAction);

    commentDiv.appendChild(userImg);
    commentDiv.appendChild(commentContent);
    commentDiv.appendChild(commentActions);

    commentsContainer.appendChild(commentDiv);

    commentInput.value = '';
}
