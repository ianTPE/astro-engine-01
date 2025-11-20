import React, { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

type EnhancedMermaidProps = {
  chartString: string
}

export function EnhancedMermaid({ chartString }: EnhancedMermaidProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [svg, setSvg] = useState('')

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'default'
    })

    const renderChart = async () => {
      try {
        const { svg: renderedSvg } = await mermaid.render(
          `mermaid-${Date.now()}`,
          chartString
        )
        setSvg(renderedSvg)
      } catch (error) {
        console.error('Mermaid rendering error:', error)
      }
    }

    renderChart()
  }, [chartString])

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white my-4">
      <div className="text-xs text-gray-500 mb-2">
        可拖曳與縮放圖表 (滑鼠滾輪縮放、拖曳移動)
      </div>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
      >
        <TransformComponent>
          <div
            ref={containerRef}
            className="mermaid"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}
