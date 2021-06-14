import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    let history = useHistory()
    const [z_index, setz_index] = useState(0)
    let coming_soon = () => {
        setz_index(3);
    }
    let back = () => {
        setz_index(0);
    }
    return (
        <div>
            <div className='Home' style={{ backgroundImage: "url(./home.png)" }}>
            </div>

            <div style={{ backgroundColor: "#000000", position: "absolute", zIndex: "0", width: "100%", height: "100%" }} >
            </div>

            {z_index === 3 ? <div onClick={back} className="soon" style={{ zIndex: `${z_index}`, backgroundColor: `rgb(0,0,0,0.8)` }} >
                <div className="soon-text">
                    Chúng tôi đang phát triển sản phẩm, cảm ơn bạn đã quan tâm.
                </div>
            </div> : ''}

            <div className='ok'>
                <div className='sign'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img className='img_sign' src='./woa.png' />
                        <div className='pc'>
                            Trang web cho PC
                        </div>
                    </div>
                    <div className='dang'>
                        <div className='nhap_ky'>
                            Đăng nhập
                        </div>
                        <div className='nhap_ky'>
                            Đăng ký
                        </div>
                    </div>
                </div>

                <div className='Text_home'>
                    <div className='flex text'>
                        <div className='h2'>
                            Nền tảng kết nối doanh nghiệp với người ảnh hưởng
                        </div>
                        <hr className='hr' />
                        <div className='explain'>
                            Social Media Influencers: là nền tảng quảng cáo người ảnh hưởng, Blue đang phát triển khai thác trên cả 3 nền tảng: Facebook, Instagram và Tiktok. Với nhiều tính năng gần gũi cho người dùng.
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '80px' }}>
                            <img onClick={coming_soon} className='img_app' src='./appstore.png' />
                            <img onClick={coming_soon} className='img_app' src='./chplay.png' />
                        </div>
                    </div>

                    <div className="flex logo">
                        <div>
                            <img src='./logo.png' className='img' />
                        </div>
                        <div className='name'>
                            Social Media Influencers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
