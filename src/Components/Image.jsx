import sampleImage from  '../assets/SampleImages/sample.webp';

// eslint-disable-next-line react/prop-types
const Image = ({src}) => {
  return (
    <div >
        <article style={{ backgroundImage: `url('${src}')` }} className={`bg-no-repeat w-full cursor-pointer` }>
            
        </article>
    </div>
  )
}

export default Image