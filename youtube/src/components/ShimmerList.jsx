import Shimmer from "./Shimmer"; // Make sure this path is correct

const ShimmerList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(8).fill(0).map((_, idx) => (
        <Shimmer key={idx} />
      ))}
    </div>
  );
};

export default ShimmerList;

