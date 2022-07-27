import { useEffect } from "react";
import { Checkbox, FormControlLabel, styled } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { CustomButton } from "components/UI/Button";
import { Flex } from "components/UI/Flex";
import ImageInput from "components/UI/ImageInput";
import { Input } from "components/UI/Input";
import { Label } from "components/UI/Label";
import { TextArea } from "components/UI/TextArea";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FormData from "form-data";
import Web3Utils from "web3-utils";
import { ethers } from "ethers";
import Spinner from "components/Spinner/Spinner.js";
import {
  MINT_CONTRACT_ABI,
  MINT_CONTRACT_ADDRESS,
} from "../../Contract/mintNft.js";
import { MdOutlineTrendingFlat } from "react-icons/md";
const Form = styled("form")(({ theme }) => ({}));
export const NewItemDetails = ({ setUrl, url }) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [imag, setImage] = useState(url);
  const [fileList, setFileList] = useState();
  const [imageFile, setImageFile] = useState();
  const [imageName, setImageName] = useState();
  const [myipfsHash, setIPFSHASH] = useState("");
  const [price, setPrice] = useState();
  const [offer, setOffer] = useState();
  const [loading, setLoading] = useState(false);
  async function mintNft(metaUrl) {
    console.log("metaUrl in mintNft is ", metaUrl);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      MINT_CONTRACT_ADDRESS,
      MINT_CONTRACT_ABI,
      signer
    );
    try {
      const tx = await contract.mint(metaUrl);
      if (tx) {
        // console.log(tx);
        const y = await tx.wait();

        if (y) {
          setLoading(false);
          alert("Your NFT is successfully minted");
        }
      }
    } catch (err) {
      setLoading(false);
      console.log("error is ", err);
    }
  }

  const handleIpfs = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", fileList);
    const API_KEY = "05c306c327884a5878f3";
    const API_SECRET =
      "67120cf8fd012968abe12fc56c271ffd26d085454a1427b4f5653bed2055f556";
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const response = await axios.post(url, formData, {
      maxContentLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
        pinata_api_key: API_KEY,
        pinata_secret_api_key: API_SECRET,
      },
    });
    // get the hash
    setIPFSHASH(response.data.IpfsHash);
    console.log(response.data.IpfsHash);

    if (response.data.IpfsHash.length > 0) {
      const image = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

      await fetch("https://tokenmart-nft-marketplace.herokuapp.com/metadata", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ name, description, image, price, offer }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          mintNft(data.metaUrl);
        });
    }
  };
  useEffect(() => {
    setImage(url);
  }, [url, fileList]);
  return (
    <Form>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        <Label>Title</Label>
        <Input
          placeholder="eg: Cybar Boss & Mega Boss #3 "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type={"text"}
        />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 5,
        }}
      >
        <Label>Description</Label>
        <TextArea
          placeholder="eg: Cybar Boss & Mega Boss #3 "
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
          width: "100%",
        }}
      >
        <ImageInput setUrl={setUrl} setFileList={setFileList} />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        <Label>Price</Label>
        <Input
          placeholder="Enter Your Price"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 5,
        }}
      >
        <Label>Offer Price</Label>
        <Input
          placeholder="Suggested 0, 10%, 20% 30% Maximum is 70% "
          type="number"
          value={offer}
          onChange={(e) => {
            setOffer(e.target.value);
          }}
        />
      </Flex>
      <Flex
        sx={{
          alignItems: "flex-start",
          marginBottom: 3,
          flexWrap: "wrap",
        }}
      >
        <FormControlLabel
          sx={{ color: "#475569" }}
          control={<Checkbox name="gilad" />}
          label="Put on Sale"
        />
        <FormControlLabel
          sx={{ color: "#475569" }}
          control={<Checkbox name="gilad" />}
          label="Instant Sale Price"
        />
        <FormControlLabel
          sx={{ color: "#475569" }}
          control={<Checkbox name="gilad" />}
          label="Unlock Purchased"
        />
      </Flex>
      <Flex
        sx={{
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        {" "}
        <CustomButton
          endIcon={<HiOutlineArrowNarrowRight />}
          onClick={handleIpfs}
          className='cursor-pointer'
          disabled={loading}
        >
         {loading ? <Spinner /> : 'Create Item'} 
        </CustomButton>
      </Flex>
    </Form>
  );
};
