export function isUrl(str) {
    const urlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$|^www\.[^\s/$.?#]+\.[^\s]*$|^[^\s/$.?#]+\.[^\s]*$/i;
    return urlRegex.test(str);
  };
