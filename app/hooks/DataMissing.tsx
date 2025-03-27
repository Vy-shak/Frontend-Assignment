import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useDataMissing = (mentor: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!mentor) {
      router.back();
    }
  }, [mentor, router]);
};

export default useDataMissing;