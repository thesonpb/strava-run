import React from "react";
import { Col, Row } from "antd";

function RecentRuns() {
  return (
    <div className="w-full">
      <h2 className="flex items-center my-4">Recent runs</h2>
      {[1, 2, 3, 4].map((item) => (
        <div className="bg-lighterGray rounded-lg w-full py-4 mb-2">
          <div className="mx-4">
            <Row>
              <Col span={2}>
                <div className="font-bold">{item}</div>
              </Col>
            </Row>
            {/* index */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentRuns;
