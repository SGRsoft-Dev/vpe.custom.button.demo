## NAVER CLOUD PLATFORM Video Player Enhancement DEMO

VIDEO24에서 제공하는 NAVERCLOUD VPE Player의 맞춤형 커스텀 버튼 코드

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/abbff549e834c3e0ce2b373f29b50d4a.png)



## 소스코드
[https://github.com/SGRsoft-Dev/vpe.custom.button.demo](https://github.com/SGRsoft-Dev/vpe.custom.button.demo)


*** 


## 필수
- 네이버클라우드 플랫폼 Video Player Enhancement SDK URL 

***

## 제한사항

현재 데모코드에 사용된 필수 요소들은 개발자 로컬 테스트에서만 동작합니다. (http://localhost:3000)

네이버클라우드 플랫폼 Video Player Enhancement 유료 라이선스가 필요합니다.
***


## 사용자 가이드
### NAVERCLOUD PLATFORM Video Player Enhancement
https://guide.ncloud-docs.com/docs/ko/vpe-overview

### VPE 재생소스 설정 가이드
https://guide.ncloud-docs.com/docs/vpe-example-source

### VPE Web 설정 가이드
https://guide.ncloud-docs.com/docs/vpe-web

### VPE 커스텀 버튼 가이드
https://guide.ncloud-docs.com/docs/vpe-example-ui#%EC%BB%A4%EC%8A%A4%ED%85%80-%EB%B2%84%ED%8A%BC-%EC%B6%94%EA%B0%80

***


## NCP Video Player Enhancement SDK 설정
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/7a602c53cc6a0b69759031e44ad8e5d9.png)

네이버클라우드 콘솔에서 Video Player Enhancement 진입

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/bc8f9b9850f93396e7e07ca2c1c9cd4d.png)

플레이어를 신규로 생성합니다.

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/37fc51c8dccfdf2711ba7500203c685c.png)

서비스를 운영할 도메인을 입력합니다.

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/6ad95ea2ed84a4412224a68f17d22c1b.png)

생성된 플레이어의 SDK URL를 복사합니다.

***

## 실행방법

```bash
$ npm install
$ npm run dev
```



## 커스텀 버튼 설정

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/abbff549e834c3e0ce2b373f29b50d4a.png)

```
//동영상(MP4)
let player = new ncplayer('video1', {
  playlist: [
    {
      file: 'https://https://CDN도메인/example_video_01.mp4',
    },
  ],
  customBtns: [
          {
              ui: "pc", //설치할 UI
              id: "chatBtn", //버튼의 DOM ID
              position: "right-bottom", //버튼 포지션
              flow: "left", //버튼 생성위치
              icon: "https://CDN도메인/example_video_01.svg", //버튼이미지
              callback(){ //클릭 이벤트
                alert('버튼클릭')
              }

          },
          {
              ui: "mobile", //설치할 UI
              id: "chatBtn", //버튼의 DOM ID
              position: "right-bottom", //버튼 포지션
              flow: "left", //버튼 생성위치
              icon: "https://CDN도메인/example_video_02.svg",  //버튼이미지
              callback(){ //클릭 이벤트
                alert("버튼클릭")
              }
            }
  ]
});

//ready 이벤트를 이용하여 커스텀 버튼에 이벤트 바인딩
player.on('ready',()=>{
  documnet.getElementById('chatBtn').addEventListener('click',()=>{
      alert('버튼클릭')
  });
})
```



***




## 문의하기


SGRSOFT 개발팀  : dev@sgrsoft.com

채널톡 : https://sgrsoft.channel.io/home

영업 및 네이버클라우드 가입 문의 : biz@sgrsoft.com

SGRSOFT를 통하여 네이버클라우드 플랫폼 크래딧을 지원 받을 수 있습니다. (최대 300만원)


VIDEO24 웹사이트 :
[https://video24.app/](https://video24.app/)

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202310/4f8b9055fd11fe2a1595586c52a7ec29.png)

