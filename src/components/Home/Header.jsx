import Hostel from "../../assets/hostel.png";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[rgba(247,236,234,0.3)] to-[rgba(203,243,240,1)] flex items-center justify-between gap-10 p-6 sm:px-12 sm:py-10 md:px-18 lg:px-24 xl:px-30">
      <p className="w-1/2 text-xl not-italic font-medium tracking-wide font-poppins">
        Leading University is the first private university in Sylhet area. Because of the glorious past of our
        university the admission rate is increasing day by day. Many of our students has been come from different
        district or remote areas for a better evaluation of education. But the main problem is for the students who has
        come from different areas firstly face a big problem which is proper accommodation. Though our University is a
        renowned University, It doesn’t has a hostel for students. So, our plan is to make a hostel management system
        for our University.
      </p>
      <img src={Hostel} alt="" className="w-1/2 mix-blend-darken" />
    </div>
  );
};

export default Header;
