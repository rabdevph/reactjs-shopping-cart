const useOptimizeImage = () => {
  const imgSrc = (url, productPage = false) => {
    const setSize = () => {
      if (productPage) {
        return 'w_800,h_800';
      }

      return 'w_600,h_600';
    };
    const OPTIONS = `dpr_auto,${setSize()},f_webp,q_auto`;
    const newUrl = `https://res.cloudinary.com/dpacplxds/image/fetch/${OPTIONS}/${url}`;
    return newUrl;
  };

  return imgSrc;
};

export default useOptimizeImage;
