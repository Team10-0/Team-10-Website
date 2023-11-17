export default function CodyMattoxPage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm Cody. </h1>
          </div>
          <img
            className='pic'
            src='https://www.bing.com/images/search?view=detailV2&ccid=GgJGQO6G&id=08D7E2423CD854CD6364511AFC6DB71B4EFBD830&thid=OIP.GgJGQO6G8WERJ6fl5F2ttgHaFc&mediaurl=https%3a%2f%2fwww.baltimoresun.com%2fresizer%2fU3B77irg0i7ViVegtGsquKjS7y0%3d%2f1024x0%2ffilters%3aformat(jpg)%3aquality(70)%2fcloudfront-us-east-1.images.arcpublishing.com%2ftronc%2fMVQ6G7PDDBAVREQDB44OWHM2BE.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1a024640ee86f1611127a7e5e45dadb6%3frik%3dMNj7Thu3bfwaUQ%26pid%3dImgRaw%26r%3d0&exph=753&expw=1024&q=cody+mattox&simid=607993844421827666&FORM=IRPRST&ck=E772D4BFC815493D018D4436F8B59A74&selectedIndex=4&ajaxhist=0&ajaxserp=0'
            alt='Cody Mattox'
          />

          <p className='description'>
        
        Hey there! I'm Cody, currently navigating the exciting journey of university life at the University of Colorado Boulder after graduating from C. Milton Wright High School.
        When I'm not immersed in the world of computer science, you can find me on the lacrosse field strategizing plays, spiking volleyballs with precision, carving through snow on skis, or scaling rock faces for that adrenaline rush.
        Balancing the challenges of coding and the thrill of sports, I'm on a mission to conquer both the academic and athletic landscapes with enthusiasm and determination.

            

          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}