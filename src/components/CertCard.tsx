import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

interface Props {
  cert: {
    type: string;
    title: string;
    issuer: string;
    issuerImage: string;
    issueDate: string;
    certImage: string;
    certLink: string;
    color: string;
  };
}

export const CertCard = (props: Props) => {
  return (
    <div className="relative flex items-center h-64 w-[28rem] bg-[#fff] rounded-lg bg-cover backdrop-blur-lg overflow-hidden mx-5 text-sm tracking-tighter transition-all ease-in-out duration-300 hover:scale-[1.02] hover:cursor-pointer">
      <div
        className={`cert-image-type absolute top-5 right-0 w-[50%] h-6 flex justify-center items-center bg-[${props.cert.color}ff] z-[6]`}
      >
        {props.cert.type}
      </div>
      <div className="cert-image-block w-fit absolute top-[-50px] left-[-50px]">
        <Image
          src={props.cert.certImage}
          width={250}
          height={250}
          alt="Cert image"
        />
      </div>
      <div
        className={`cert-image-overlay top-0 left-0 h-full w-full z-[5] bg-transparent bg-gradient-to-br from-[#ffffffa0] from-30% to-[${props.cert.color}ff] to-100%`}
      />

      <div className="z-[6]">
        <div className="w-60 text-[#454545] absolute top-20 right-3">
          <h3 className="text-lg font-semibold">{props.cert.title}</h3>
          <div className="flex items-center">
            <Image
              src={props.cert.issuerImage}
              width={30}
              height={30}
              alt="Issuer Logo"
            />
            <span className="ml-3">{props.cert.issuer}</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-5 text-right">
          <span>Issue Date: {props.cert.issueDate}</span>
          {props.cert.certLink != "" ? (
            <Link
              href={props.cert.certLink}
              target="_blank"
              className="underline flex items-center"
            >
              <span className="mr-2">View Certificate</span>
              <IconExternalLink stroke={1} size={15} />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};