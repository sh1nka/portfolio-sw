import Sidebar from '../components/Sidebar';
import ImageContent from '../components/ImageContent';


function Home() {
    return (
        <div className='content'>
            <div className='left-side'>
            <h1>teste</h1>
                <Sidebar />
                
            </div>

            <div className='right-side'>
                <ImageContent />
            </div>
        </div>
    )
}

export default Home;