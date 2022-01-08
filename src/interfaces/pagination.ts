export interface I_pagination {
  total_data: number,
  total_pages: number,
  previous: number,
  next: number,
  limit: number,
  results: Object[];
}