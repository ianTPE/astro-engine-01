import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

type UniversalChartProps = {
  type: 'bar' | 'line'
  data: any
  options?: ChartOptions<'bar'> | ChartOptions<'line'>
}

export function UniversalChart({ type, data, options }: UniversalChartProps) {
  const mergedOptions = {
    ...options,
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <div className="w-full h-[300px] my-4">
      {type === 'bar' && <Bar data={data} options={mergedOptions as ChartOptions<'bar'>} />}
      {type === 'line' && <Line data={data} options={mergedOptions as ChartOptions<'line'>} />}
    </div>
  )
}
