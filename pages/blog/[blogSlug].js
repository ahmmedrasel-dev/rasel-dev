import { useRouter } from "next/router";

const blogSlug = () => {
  const router = useRouter();
  const slug = router.query.blogSlug;
  return (
    <div>
      This is daynamic Blog {slug};
    </div>
  );
};

export default blogSlug;