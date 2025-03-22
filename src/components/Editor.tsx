"use client";
import React, { useState, ChangeEvent, TextareaHTMLAttributes, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { Md2PosterContent, Md2Poster, Md2PosterHeader, Md2PosterFooter } from "markdown-to-poster";
import { Copy, LoaderCircle } from "lucide-react";

const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ onChange, ...rest }) => {
    return (
        <textarea
            className="border-none bg-gray-100 p-8 w-full resize-none h-full min-h-screen
      focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0
      text-gray-900/70 hover:text-gray-900 focus:text-gray-900 font-light font-inter
      "
            {...rest}
            onChange={(e) => onChange?.(e)}
        />
    );
};

const defaultMd = `# AI晨报 - 4月29日  

![image](https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/artificial-intelligence--ai/960x0.jpg?format=jpg&width=1440)  

1. **MetaElephant公司发布多模态大模型XVERSE-V**：支持任意长宽比的图像输入，在多项权威评测中表现优异，并已开源。  
2. **通义千问团队开源百亿参数模型Qwen1.5-110B**：采用Transformer解码器架构，支持多种语言，并具备高效的注意力机制。  
3. **生数科技与清华大学发布视频大模型Vidu**：采用扩散模型（Diffusion）与Transformer融合架构，一键生成高清视频，国际领先。  
4. **Mutable AI推出Auto Wiki v2**：可自动将代码转换为类似维基百科的文档，解决代码文档化问题。  
5. **谷歌在美国新建数据中心**：计划投资30亿美元，在印第安纳州建设数据中心园区，扩建弗吉尼亚州设施，并启动人工智能机会基金。  
6. **中国信息通信研究院发布汽车大模型标准**：旨在规范和促进汽车行业的智能化发展。  
7. **Kimi Chat移动端应用更新**：版本1.2.1全面改版用户界面，引入全新浅色模式，提供更舒适直观的体验。  `;

export default function Editor() {
    const [mdString, setMdString] = useState(defaultMd);
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMdString(e.target.value);
    };
    const markdownRef = useRef<any>(null);
    const [copyLoading, setCopyLoading] = useState(false);
    const handleCopyFromChild = () => {
        setCopyLoading(true);
        markdownRef?.current
            ?.handleCopy()
            .then((res) => {
                setCopyLoading(false);
                alert("Copy Success!");
            })
            .catch((err) => {
                setCopyLoading(false);
                console.log("err copying from child", err);
            });
    };
    const copySuccessCallback = () => {
        console.log("copySuccessCallback");
    };
    return (
        <ScrollArea className="h-[96vh] w-full border-2 border-gray-900 rounded-xl my-4 relative">
            <div className="flex flex-row h-full ">
                <div className="w-1/2">
                    {/* Edit */}
                    <Textarea placeholder="markdown" onChange={handleChange} defaultValue={mdString} />
                </div>
                <div className="w-1/2 mx-auto flex justify-center p-4 ">
                    {/* Preview */}
                    <div className="flex flex-col w-fit">
                        <Md2Poster
                            theme="SpringGradientWave"
                            copySuccessCallback={copySuccessCallback}
                            ref={markdownRef}
                        >
                            <Md2PosterHeader className="flex justify-center items-center px-4 font-medium text-lg">
                                <span>{new Date().toISOString().slice(0, 10)} 【比特金矿】精选线报</span>
                            </Md2PosterHeader>
                            <Md2PosterContent>{mdString}</Md2PosterContent>
                            <Md2PosterFooter className="text-center">
                                <img src="/Footer.png" alt="logo" />
                            </Md2PosterFooter>
                        </Md2Poster>
                    </div>
                </div>
            </div>
            <div className="absolute top-4 right-4 flex flex-row gap-2 opacity-80 hover:opacity-100 transition-all">
                <Button
                    className=" rounded-xl"
                    onClick={handleCopyFromChild}
                    {...(copyLoading ? { disabled: true } : {})}
                >
                    {copyLoading ? (
                        <LoaderCircle className="w-4 h-4 mr-1 animate-spin" />
                    ) : (
                        <Copy className="w-4 h-4 mr-1" />
                    )}
                    Copy Image
                </Button>
            </div>
        </ScrollArea>
    );
}
