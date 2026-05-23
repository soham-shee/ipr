import React, { useCallback } from 'react';
import ReactFlow, { 
  Background, 
  useNodesState, 
  useEdgesState, 
  MarkerType 
} from 'reactflow';
import 'reactflow/dist/style.css';

// Initial Nodes based on the flowchart logic
const initialNodes = [
  {
    id: '1',
    data: { label: 'Accepted & Advertised\n(For Inviting Third Party Objections)' },
    position: { x: 250, y: 0 },
    style: { background: '#3b82f6', color: '#fff', borderRadius: '50px', width: 250, padding: 10, fontWeight: 'bold' },
  },
  {
    id: '2',
    data: { label: 'Opposition may be filed within 4 months from date of advertisement' },
    position: { x: 250, y: 100 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250 },
  },
  {
    id: '3',
    data: { label: 'Applicant files Counter Statement (Reply) within 2 months of receipt' },
    position: { x: 250, y: 200 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 250 },
  },
  {
    id: '4',
    data: { label: 'Opponent files Evidence in Support within 2 months of Counter Statement' },
    position: { x: 50, y: 320 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 220 },
  },
  {
    id: '5',
    data: { label: 'Applicant files Evidence in Support within 2 months of Opponent Evidence' },
    position: { x: 50, y: 440 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 220 },
  },
  {
    id: '6',
    data: { label: 'Opponent may file Evidence in Reply within 1 month' },
    position: { x: 50, y: 560 },
    style: { background: '#f8fafc', border: '1px solid #cbd5e1', width: 220 },
  },
  {
    id: '7',
    data: { label: 'HEARING' },
    position: { x: 50, y: 660 },
    style: { background: '#8b5cf6', color: '#fff', borderRadius: '50px', width: 220, fontWeight: 'bold' },
  },
  {
    id: '8-fail',
    data: { label: 'If No Counter Statement Filed By Applicant' },
    position: { x: 450, y: 320 },
    style: { background: '#fee2e2', border: '1px solid #ef4444', width: 200, color: '#991b1b' },
  },
  {
    id: '9-success',
    data: { label: 'Opposition Abandoned:\nMARK PROCEEDS TO REGISTRATION' },
    position: { x: -100, y: 780 },
    style: { background: '#dcfce7', border: '1px solid #22c55e', width: 250, color: '#166534', fontWeight: 'bold' },
  },
  {
    id: '9-fail',
    data: { label: 'APPLICATION ABANDONED' },
    position: { x: 425, y: 780 },
    style: { background: '#fecaca', border: '1px solid #dc2626', width: 250, color: '#991b1b', fontWeight: 'bold' },
  },
];

// Defining the connections
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },

  { id: 'e2-3', source: '2', target: '3' },

  // Counter filed → normal path
  { id: 'e3-4', source: '3', target: '4', label: 'Counter filed' },

  // No response
  { 
    id: 'e3-8',
    source: '3',
    target: '8-fail',
    label: 'No response',
    type: 'smoothstep',
    style: { stroke: '#ef4444', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' }
  },

  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e6-7', source: '6', target: '7' },

  // success
  { 
    id: 'e7-9s',
    source: '7',
    target: '9-success',
    label: 'Won',
    type: 'smoothstep',
    style: { stroke: '#22c55e', strokeWidth: 2.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' }
  },

  // failure
  { 
    id: 'e7-9f',
    source: '7',
    target: '9-fail',
    label: 'Lost',
    type: 'smoothstep',
    style: { stroke: '#ef4444', strokeWidth: 2.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' }
  },
  // failure
  { 
    id: 'e8-9f',
    source: '8-fail',
    target: '9-fail',
    style: { stroke: '#dc2626', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#dc2626' }
  },
];

const ModernFlowchart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
      <ReactFlow
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  fitView
  fitViewOptions={{ padding: 0 }}

  nodesDraggable={false}
  nodesConnectable={false}
  elementsSelectable={false}
  panOnDrag={false}
  zoomOnScroll={false}
  zoomOnPinch={false}
  zoomOnDoubleClick={false}

  defaultEdgeOptions={{
    style: { stroke: '#64748b', strokeWidth: 1.5 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#64748b',
    },
  }}
>
  <Background color="transparent" gap={10} />
</ReactFlow>
    </div>
  );
};

export default ModernFlowchart;