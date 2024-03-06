import sampleImage from  '../assets/SampleImages/sample.webp';

const Image = ({classN}) => {
  return (
    <div >
        <article className={`${classN} bg-[url('https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-mueller-hut-adventure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-contain  bg-no-repeat`}>
            <h1>hello</h1>
        </article>
    </div>
  )
}

export default Image