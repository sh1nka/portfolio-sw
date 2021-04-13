import avatar from '../images/avatar.jpg';

function ImageContent()
{
    return(
    <div className="profile-img">
        <img src={avatar} alt=""/>
    </div>
    )
}

export default ImageContent;