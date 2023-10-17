"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { calculateDynamicSize } from "@/lib/utils"

const ImageGenerator: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [aspectRatio, setAspectRatio] = useState<string>("Vertical");
  const [prompt, setPrompt] = useState<string>("cute cat");
  const [negativePrompt, setNegativePrompt] = useState<string>("");
  const [modelOptions, setModelOptions] = useState([]);
  const [model, setModel] = useState<string>("");
  const [cfg, setCfg] = useState<number>(1);
  const [seed, setSeed] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dynamicSize = calculateDynamicSize(aspectRatio.toLocaleLowerCase(), 600);

  const fetchModelData = useCallback(async () => {
    try {
      const response = await fetch('/api/sdapi/v1/sd-models');
      const data = await response.json();
      const modelNames = data.map((item: any) => item.model_name);
      setModelOptions(modelNames);
      if (modelNames.length > 0) {
        setModel(modelNames[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchModelData();
  }, [fetchModelData]);

  const handleCreateImage = async () => {
    setIsLoading(true);
    setImages([])
    const requestBody = {
      enable_hr: false,
      denoising_strength: 0,
      firstphase_width: 0,
      firstphase_height: 0,
      hr_scale: 2,
      hr_upscaler: "",
      hr_second_pass_steps: 0,
      hr_resize_x: 0,
      hr_resize_y: 0,
      hr_sampler_name: "",
      hr_prompt: "",
      hr_negative_prompt: "",
      prompt,
      styles: [""],
      seed: Number(seed),
      subseed: -1,
      subseed_strength: 0,
      seed_resize_from_h: -1,
      seed_resize_from_w: -1,
      sampler_name: "",
      batch_size: 1,
      n_iter: 1,
      steps: 50,
      cfg_scale: Number(cfg),
      width: dynamicSize.width,
      height: dynamicSize.height,
      restore_faces: false,
      tiling: false,
      do_not_save_samples: false,
      do_not_save_grid: false,
      negative_prompt: negativePrompt,
      eta: 0,
      s_min_uncond: 0,
      s_churn: 0,
      s_tmax: 0,
      s_tmin: 0,
      s_noise: 1,
      override_settings: {
        sd_model_checkpoint: model
      },
      override_settings_restore_afterwards: true,
      script_args: [],
      sampler_index: "Euler",
      script_name: "",
      send_images: true,
      save_images: false,
      alwayson_scripts: {},
    };
    try {
      const response = await fetch("/api/sdapi/v1/txt2img", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        const data = await response.json();
        setImages(data?.images);
      } else {
        console.error("Error creating image");
      }
    } catch (error) {
      console.error("Error creating image:", error);
    } finally {
      setIsLoading(false)
    }
  };

  const optionElements = useMemo(() => {
    return modelOptions.map((modelName) => (
      <option key={modelName} value={modelName}>
        {modelName}
      </option>
    ));
  }, [modelOptions]);

  return (
    <div className="flex gap-10 w-full items-center main-container">
      <div className="w-1/2 p-4 image-wrapper">
        <div className="border image-preview border-gray-300 p-4">
          {
            isLoading && (
              <p>Please wait...
                While we preparing your picture</p>
            )

          }
          {images &&
            images.length > 0 ?
            images.map((imageData: string) => {
              imageData = `data:image/png;base64,${imageData}`;
              return (
                <Image
                  src={imageData}
                  alt="Generated Image"
                  width= {dynamicSize.width}
                  height= {dynamicSize.height}
                />
              );
            }) : (
              <p>Your image preview will appear here</p>
            )}
        </div>
      </div>
      <div className="w-1/2 p-4 form-wrapper">
        <div className="mb-4">
          <label className="block font-semibold">ASPECT RATIO:</label>
          <div className="flex">
            <div className="flex space-x-4">
              <div>
                <div
                  className={`cursor-pointer box w-15 h-20 border border-black ${
                    aspectRatio === "Vertical" ? "border-4" : ""
                  }`}
                  onClick={() => setAspectRatio("Vertical")}
                ></div>
                Vertical
              </div>
              <div>
                <div
                  className={`cursor-pointer box w-20 h-20 border border-black ${
                    aspectRatio === "Square" ? "border-4" : ""
                  }`}
                  onClick={() => setAspectRatio("Square")}
                ></div>
                Square
              </div>
              <div>
                <div
                  className={`cursor-pointer box w-40 h-20 border border-black ${
                    aspectRatio === "Horizontal" ? "border-4" : ""
                  }`}
                  onClick={() => setAspectRatio("Horizontal")}
                ></div>
                Horizontal
              </div>
            </div>
            {/* <label className="mr-4">
              <Input
                type="radio"
                value="Vertical"
                checked={aspectRatio === "Vertical"}
                onChange={() => setAspectRatio("Vertical")}
              />
              Vertical
            </label>
            <label className="mr-4">
              <Input
                type="radio"
                value="Square"
                checked={aspectRatio === "Square"}
                onChange={() => setAspectRatio("Square")}
              />
              Square
            </label>
            <label>
              <Input
                type="radio"
                value="Horizontal"
                checked={aspectRatio === "Horizontal"}
                onChange={() => setAspectRatio("Horizontal")}
              />
              Horizontal
            </label> */}
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Prompt:</label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Negative Prompt:</label>
          <Textarea
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">MODELS:</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {optionElements}
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">CFG:</label>
          <Input
            type="range"
            min="0"
            max="30"
            value={cfg}
            onChange={(e) => setCfg(Number(e.target.value))}
            className="w-full"
          />
          {/* <Slider onChange={(val) => setCfg(Number(val))} defaultValue={[33]} max={100} step={1} /> */}
        </div>
        <div className="mb-4">
          <label className="block font-semibold">SEED:</label>
          <Input
            type="text"
            value={seed || -1}
            onChange={(e) => setSeed(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <Button
          disabled={isLoading}
          onClick={handleCreateImage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {isLoading ? "Processing..." : "CREATE"}
        </Button>
      </div>
    </div>
  );
};

export default ImageGenerator;
