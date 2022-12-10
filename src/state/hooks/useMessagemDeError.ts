import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export const useMessagemDeError = () => {
  const messagemError = useRecoilValue(errorState)
  return messagemError;
}