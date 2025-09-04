import React from 'react'

const siteText =[
    {
        text:["make","site compliant with","KimKiBbum"],
        title:"요가처럼_Like Yoga",
        code:"https://www.naver.com/",
        view:"/",
        info:["site coding","제작 기간 : 3일","프로그램 : html5, css3, javascript, react 등"],
    },
    {
        text:["make","site2 compliant with","KimKiBbum"],
        title:"테라마켓_TerraMarket",
        code:"https://www.daum.net/",
        view:"/",
        info:["site coding","제작 기간 : 5일","프로그램 : html5, css3, javascript, react 등"],
    },
    {
        text:["make","site3 compliant with","KimKiBbum"],
        title:"밋틀리_Meetly",
        code:"/",
        view:"/",
        info:["site coding","제작 기간 : 7일","프로그램 : html5, css3, javascript, react 등"],
    },
    {
        text:["make","site4 compliant with","KimKiBbum"],
        title:"개인 프로젝트",
        code:"/",
        view:"/",
        info:["site coding","제작 기간 : 10일","프로그램 : html5, css3, javascript, react 등"],
    },
    {
        text:["make","site5 compliant with","KimKiBbum"],
        title:"팀 프로젝트",
        code:"/",
        view:"/",
        info:["site coding","제작 기간 : 12일","프로그램 : html5, css3, javascript, react 등"],
    },
    {
        text:["make","site5 compliant with","KimKiBbum"],
        title:"팀 프로젝트",
        code:"/",
        view:"/",
        info:["site coding","제작 기간 : 12일","프로그램 : html5, css3, javascript, react 등"],
    },
]

const Site = () => {
    return (
        <section id='site'>
            <div className="site_inner">
                <div className="site_title">
                    Site Conding <em>나의 작품들</em>
                </div>
                <div className="site_wrap">

                    {siteText.map((site,key)=>(
                        <div className={`site_item s${key+1}`} key={key}>
                        <span className='num'>{key+1}.</span>
                        <div className="text">
                            <div>{site.text[0]}</div>
                            <div>{site.text[1]}</div>
                            <div>{site.text[2]}</div>
                        </div>
                        <h3 className='title'>{site.title}</h3>
                        <div className="btn">
                            <a href={site.code}>code</a>
                            <a href={site.view}>view</a>
                        </div>
                        <div className="info">
                            <span>{site.info[0]}</span>
                            <span>{site.info[1]}</span>
                            <span>{site.info[2]}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site