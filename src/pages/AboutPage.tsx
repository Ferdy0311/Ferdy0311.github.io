
const contentList = [
  {
    year: '1993',
    detail: 'Born in Indonesia'
  },
  {
    year: '2011',
    detail: 'Study Computer Science in Bina Nusantara University'
  },
  {
    year: '2017',
    detail: 'Internship as Android Developer at Bahaso'
  },
  {
    year: '2018',
    detail: 'Graduated as Bachelor of Computer Science'
  },
  {
    year: '2018',
    detail: 'Work as Technical Consultant at Technosoft Consulting'
  },
  {
    year: '2019',
    detail: 'Work as Android Developer at KlikDokter'
  },
  {
    year: '2020',
    detail: 'Work as Application Developer at CIMB Niaga'
  }
];

const AboutPage = (props: AboutPageProps) => {
  return (
    <>
      <div className="flex mt-20">
        <div className="flex-auto">
          <div className="bg-black w-[100%] h-1 mt-3" />
        </div>
        <div className="flex-shrink font-medium px-2">Life and Career Journey</div>
        <div className="flex-auto">
          <div className="bg-black w-[100%] h-1 mt-3" />
        </div>
      </div>
      <div
        className="timeline
          mt-5
          relative
          max-w-[1200px]
          my-0 mx-auto
          after:absolute
          after:w-[6px]
          after:bg-black
          after:top-0
          after:bottom-0
          md:after:left-1/2 after:left-[31px]
          after:-ml-[3px]
        "
      >
        {contentList.map((o, index) => (
          <div
            className={`container
              py-[10px] md:pl-[40px] pl-[70px] md:pr-[40px] pr-[25px]
              relative
              bg-inherit
              md:w-1/2 w-[100%]
              after:absolute
              after:w-[25px]
              after:h-[25px]
              after:-right-[12px]
              after:border-[4px]
              after:border-solid
              after:border-black
              after:bg-black
              after:top-[15px]
              after:rounded-[50%]
              after:z-1
              ${index % 2 === 0 
                ? ' left-0'
                  + ' before:h-0'
                  + ' before:absolute'
                  + ' before:top-[22px]'
                  + ' before:w-0'
                  + ' before:z-1'
                  + ' md:before:right-[30px] before:right-auto'
                  + ' md:before:left-auto before:left-[60px]'
                  + ' before:border-2'
                  + ' before:border-solid'
                  + ' before:border-black'
                  + ' before:border-t-[10px]'
                  + ' md:before:border-r-[0] before:border-r-[10px]'
                  + ' before:border-b-[10px]'
                  + ' md:before:border-l-[10px] before:border-l-[0]'
                  + ' before:border-t-[transparent]'
                  + ' md:before:border-r-[transparent] before:border-r-[black]'
                  + ' before:border-b-[transparent]'
                  + ' md:before:border-l-[black] before:border-l-[transparent]'
                  + ' md:after:left-auto after:left-[18px]'
                : ' md:left-[50%] left-[0]'
                  + ' before:h-0'
                  + ' before:absolute'
                  + ' before:top-[22px]'
                  + ' before:w-0'
                  + ' before:z-1'
                  + ' md:before:left-[30px] before:left-[60px]'
                  + ' before:border-2'
                  + ' before:border-solid'
                  + ' before:border-black'
                  + ' before:border-t-[10px]'
                  + ' before:border-r-[10px]'
                  + ' before:border-b-[10px]'
                  + ' before:border-l-[0]'
                  + ' before:border-t-[transparent]'
                  + ' before:border-r-[black]'
                  + ' before:border-b-[transparent]'
                  + ' before:border-l-[transparent]'
                  + ' md:after:-left-[12px] after:left-[18px]'
              }
            `}
          >
            <div
              className="content
                py-[20px]
                px-[30px]
                bg-white
                border-solid
                border-black
                border-2
                relative
                rounded-[6px]
              "
            >
              <h2>{o.year}</h2>
              <p>{o.detail}</p>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
};

interface AboutPageProps {}

export default AboutPage;