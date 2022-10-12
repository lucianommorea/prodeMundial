



const paginate = (limit, page, arr) => {
    const startIndex = (page - 1) * limit;
  
    const endIndex = page * limit;
  
    const results = arr.slice(startIndex, endIndex);
  
    let aux = Math.ceil(arr.length / limit);
  
    let totalPages = aux;
  
    let pages = [];
  
    while (aux > 0) {
      pages.unshift(aux);
      aux = aux - 1;
    }
  
    switch (page) {
      case 1:
        pages = pages.filter((p) => p < page + 5);
        break;
      case 2:
        pages = pages.filter((p) => p < page + 4);
        break;
      case pages.length - 1:
        pages = pages.filter((p) => p > page - 4);
        break;
      case pages.length:
        pages = pages.filter((p) => p > page - 5);
        break;
      default:
        pages = pages.filter((p) => p > page - 3 && p < page + 3);
    }
  
    return {
      totalPages,
      pages,
      results,
    };
  };


  const checkEmailAdmin = (obj) => {
    const emails = [
      "lucianommorea@gmail.com"
    ];
    return emails.includes(obj.email);
  };

module.exports = {
    paginate,
    checkEmailAdmin
  };