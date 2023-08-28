window.player = null
document.addEventListener('DOMContentLoaded', () => {
    window.player = new ncplayer('player',{
        playlist:[
            {
                file:'https://fsxikvammvwv14470411.cdn.ntruss.com/hls/9N5-iJ4f9tdzE6D708PTmg__/vod/j5IXBfIJ83893893_,1080,720,480,p.mp4.smil/master.m3u8',
                poster:'https://wnfosehmzhuc12665447.cdn.ntruss.com/thumb/sample_thumb.png?type=m&w=1024&h=760&ttype=jpg',
                description: {
                    title: "네이버클라우드 소개 영상",
                    created_at: "2023.07.13",
                    profile_name: "네이버클라우드",
                    profile_image: "https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202208/d127c8db642716d84b3201f1d152e52a.png"
                },
            }
        ],
        autostart:true, // 자동재생
        muted:true, // 음소거 시작여부
        ui:'all', // ui 종류 all , pc , mobile
        controlBtn:{ // 컨트롤 버튼 사용 여부
            play:true, // 재생버튼
            fullscreen:true, // 전체화면
            volume:true, // 볼륨
            times:true, // 시간
            pictureInPicture:true, // 픽쳐인픽쳐
            setting:true, // 설정
            subtitle:false, // 자막
        },
        progressBarColor:"#ff0000", // 프로그래스바 색상
        controlActiveTime:39000, // 컨트롤러 활성화 시간
        customBtns:[
            //PC UI 추가 커스텀 버튼
            {
                ui:'pc',
                position:'left-top',
                icon:'https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202306/22063244f8ea31d08a72492b63992ede.svg',
                callback(){
                    alert('test left-top');
                }
            },
            {
                ui:'pc',
                position:'left-top',
                flow:'right',
                icon:'https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202307/f0131976b292a782fa16b7cdd576a018.svg',
                callback(){
                    alert('test left-top-right');
                }
            },
            {
                ui:'pc',
                position:'right-top',
                flow:'right',
                icon:'https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202307/d2c4fb69885ca7a7787866ee6702f14d.svg',
                callback(){
                    alert('test3 right-top-right')
                },
            },
            {
                ui:'pc',
                position:'right-bottom',
                flow:'left',
                icon:'https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202307/fcfb1a29523cf2bdff639e5f0e6e4082.svg',
                callback(){
                    alert('test3 right-bottom-left')
                },
            },

            //Mobile UI 추가 커스텀 버튼
            {
                ui:'mobile',
                position:'right-bottom',
                flow:'left',
                icon:'https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202304/76d003b3ca6448f7f4061126c4d251b8.svg',
                callback(){
                    alert('test2 right-bottom-left')
                },
            },
            {

                ui:'mobile',
                position:'right-bottom',
                flow:'right',
                icon:'https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202307/ade6d75f74eb22a0b0bc94d1dfae180e.svg',
                callback(){
                    alert('test2 right-bottom-right')
                },
            },
            {
                ui:'mobile',
                position:'left-bottom',
                flow:'left',
                icon:'https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202306/95e458cc5721b7afcd3d3b0c008c0824.svg',
                callback(){
                    alert('test4 left-bottom-left')
                },
            },
            {

                ui:'mobile',
                position:'left-bottom',
                flow:'right',
                icon:'https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202306/40d7667eeb5a1ac80c1f9930240e4970.svg',
                callback(){
                    alert('test4 left-bottom-right')
                },
            }
        ]
    })
});
