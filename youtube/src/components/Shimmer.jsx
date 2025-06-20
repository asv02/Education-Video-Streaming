const Shimmer = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 m-4 animate-pulse">
      {/* Thumbnail shimmer */}
      <div className="w-full h-40 bg-gray-300" />
      <div className="p-4">
        {/* Title shimmer */}
        <div className="h-5 bg-gray-300 rounded mb-1 w-3/4" />
        {/* Description shimmer */}
        <div className="h-4 bg-gray-200 rounded mb-2 w-1/2" />
        {/* Date shimmer */}
        <div className="h-3 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  );
};

export default Shimmer;
