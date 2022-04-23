import React from 'react'

const Footer = () => {

    const RRSS = ['twitter', 'facebook', 'instagram', 'tiktok'];
    const copyrightYear = new Date().getFullYear();


  return (
    <div className='footer'>
        <div>
            Siguenos en:
        </div>

        <ul>
            {RRSS.map((rs, index) => {
                return (
                    <>
                        <li key={index}>
                            {rs} 
                        </li>
                        {index < RRSS.length - 1 ? <span>|</span> : null}
                    </>)
            })
            }
        </ul>
        <div className='footer__copyright'>
            Copyright Shopeame © {copyrightYear}
        </div>
    </div>
  )
}

export default Footer