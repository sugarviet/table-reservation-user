import { Skeleton } from "antd";

const LoadingBlog = () => {
    return (
        <Skeleton
            active
            paragraph={{
                rows: 10,
            }} />
    )
}
export default LoadingBlog;
