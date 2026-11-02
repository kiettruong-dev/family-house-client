import { useQuery } from "@tanstack/react-query";
import { familyApi } from "../apis/family.api";

// 1. Fetch dữ liệu (GET)
const fetchFamily = async () => {
  const data = familyApi.getAll();
  return data;
};

export const useFamily = () => {
  return useQuery({
    queryKey: ["familyAll"],
    queryFn: () => fetchFamily(),
  });
};
