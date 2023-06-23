import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const history = useNavigate();


    const handlechange = (e) => {

        let numberOfVideos = e.target.files.length;
        for (let i = 0; i < numberOfVideos; i++) {
            let file = e.target.files[i];
            let blobURL = URL.createObjectURL(file);
            let video = document.createElement('video');
            video.src = blobURL;
            video.style.width = "300px"
            video.style.height = "250px"
            video.style.padding = "10px";
            video.setAttribute("controls", "")
            const videos = document.getElementById("list");
            videos.appendChild(video);
        }
    };

    const logoutClick = () => {
        history('/');
    }
    return (
        <>
            <div >
                <nav>
                    <div>
                        <h2 className="knl">
                            <span className="cap">K</span>
                            <span className="small">n</span>
                            <span className="cap">O</span>
                            <span className="small">wl</span>
                            <span className="cap">E</span>
                            <span className="small">d</span>
                            <span className="cap">GE</span>
                        </h2>
                    </div>

                    <div className='logoutsec'>
                        <h4><i class="bi bi-person-circle" id="personicon"></i> &nbsp;{localStorage.getItem('email')}</h4>
                        <button onClick={logoutClick} className='logout'>Logout</button>
                    </div>
                </nav>
                <div className="container">
                    <>
                        <div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input name='url' className='form-control mt-4 w-50 align-items-center' type="file" multiple onChange={handlechange} />
                            </div>
                            <div id="list" >
                            </div>
                        </div>
                    </>

                </div>
            </div>
        </>
    )
}
export default Home;