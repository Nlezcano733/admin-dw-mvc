class Helpers {
  static eachJson(data: string[], tag?: string, className?: string, option?: any) {
    return data?.map(d => d?.slice(1, d.length - 1));
  }
}

export default Helpers;



