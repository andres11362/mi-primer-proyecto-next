import Image from "next/image";

const ProfileImage = () => {
    return (
        <>
            <Image 
                src={`/images/profile.jpg`}
                height={144}
                width={144}
                alt="Your name"
            />
        </>
    ); 
}

export default ProfileImage;