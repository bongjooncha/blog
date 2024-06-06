import { React } from "react";
import StudySidenav from "components/layout/Nav/study/StudySideNav";
function Yolov8() {
  return (
    <>
      <StudySidenav />
      <div className="main_con">
        <div className="contents">
          <h1 id="param">Yolo Parameters</h1>
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <div>
                    <p>
                      <span>Key</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span>Value</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span>Description</span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p>
                      <span>model</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span>None</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span>모델 파일의 경로</span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <p>
                      <span>data</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span>None</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-55ebba66-c943-404a-931a-2c1c0b9753f3"
                    >
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-a6dade85-f7c5-4a27-a3f6-3ea8c8327a0f"
                      >
                        데이터 파일 경로
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-65f42e53-d35d-4fc4-a55e-f79bee868978"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-eef8c535-4d20-46c1-8ed7-60a565ca5637"
                      >
                        epochs
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-67c91d0a-af79-46cc-91dc-d6ae3714a065"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-b91e4de2-40c4-477a-8497-167cb4e8b028"
                      >
                        100
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-6379bcd2-fd88-4db3-9b4a-0af495a496b0"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-681f3dd7-7ea8-466e-9a9c-3f2d40b3cf53"
                      >
                        훈련할 에포크 수
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-a381a2a2-7f21-4275-a39c-2bc31419939b"
                    >
                      <span>time</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-08158771-786d-4ef5-a65a-6d4b69c65f95"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-d1765800-49e3-4557-bf97-dfe477c00de5"
                      >
                        None
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-c8a49a23-46cf-4a89-8a03-fae959714341"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-ad475cbe-f09c-4069-9ba6-da227b53b06f"
                      >
                        훈련할 시간(시간 단위)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-8aa8bd92-65ac-4c96-8a7f-3698b116a82e"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-dd797c76-96b5-44ac-9a97-5b5e20401a5b"
                      >
                        patience
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-d11c38b3-ce61-4976-a2c7-d98494b0794b"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-8150a11c-b375-44c4-9c27-b6a85e7d34e1"
                      >
                        50
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-57cf2b51-97ff-4346-a3d7-0e4035b60cc8"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-479b8c42-eff6-4ee6-a171-3495f70965d4"
                      >
                        조기 종료를 위한 에포크 수
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-50c1b410-6e70-4bf2-bf51-1e0a96708422"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-ce326ac0-be80-49f5-858a-a59a9d70e754"
                      >
                        batch
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-bfca8939-4702-4215-86a1-d6fb5848d7a0"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-3a79edce-df4c-44f1-8aaf-bad71846832e"
                      >
                        16
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-ed777887-8254-44b0-b035-eb86cb2e6b88"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-029ee4b2-b1b9-4a61-8593-f756f9cbf34f"
                      >
                        각 배치에 포함될 이미지 수 (-1은 AutoBatch)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-b34393fa-df9b-49c8-be4f-8e2cf1fbbce5"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-78e6a79f-f1d2-437d-8b52-45c052c88e17"
                      >
                        imgsz
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-289af23f-2236-493d-8430-bcf610de5d93"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-a7465094-59d2-4759-8e1e-3d428935d4b9"
                      >
                        640
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-8f643ea7-2d1a-4450-95e0-93731890e661"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-22e7e761-96c7-4c34-ad4e-987edce9e8c5"
                      >
                        입력 이미지의 크기
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-49dfcebe-9763-49c4-9542-f4fdee685da9"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-bbd39ecb-7bdd-4e3a-8420-658472cf3d66"
                      >
                        save
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-c3e0920e-f936-480b-9d2b-2d00169b4d23"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-d3947373-7109-4963-bd92-33ce167d316f"
                      >
                        True
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-85a71025-5edb-45d1-afc9-1775b883d0e2"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-b237a6a3-c5df-47ca-86dc-a6f61984192f"
                      >
                        훈련 체크포인트와 결과를 저장할지 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-e4df9ac5-56f6-42a8-8d26-b99bfd4c12ce"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-5ba3766d-6064-42eb-a4c9-bf77116e630d"
                      >
                        save_period
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-081b7498-7e4c-4337-acd5-8a47f9409f81"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-1fb0259d-05af-4f72-8241-52fbf3779ad1"
                      >
                        -1
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-267ba44d-019a-4d9c-944f-2b1043d014eb"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-a9b33f04-9882-4cb5-ab4d-08c6163f0c9c"
                      >
                        x 에포크마다 체크포인트 저장 (1 미만이면 비활성화)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-8ce8c509-8b5e-452d-8f9b-c8c23073e21f"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-74c17ba8-360d-4630-b3c9-ce1e652209fb"
                      >
                        cache
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-1c67f9f8-ca68-437f-9b67-376246e6a890"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-f6c4b337-fb8a-4c69-b0f0-a54770d469c3"
                      >
                        False
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-c238e7c8-4529-48b5-b98a-4e125046549a"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-9b5fa364-1b08-491d-bb44-9a4d0273bc3f"
                      >
                        데이터 로딩에 캐시 사용 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-e6d1562e-0a5f-4de4-8096-fae53034df6e"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-363dd708-a097-40ab-afdb-5d13ca4fffdd"
                      >
                        device
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-a598e71b-d02b-41e4-a8f3-94eefd809c91"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-459dfede-6f85-4233-a4e6-9b6cbf799c5f"
                      >
                        None
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-c4c5010f-9db2-46dc-aff4-8685bf96bca2"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-c01939cf-e3d3-48ca-be10-da1d178ecfb4"
                      >
                        실행 장치 (cuda device=0, device=cpu 등)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-0c639a3d-3920-4cf9-bbe1-b39bab8a9cb9"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-02b9f180-fdf4-441b-a9ab-7b20deedc757"
                      >
                        workers
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-58a9a2e2-40c3-4217-bfbb-6b2b1ca38d09"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-31fb998e-8ef9-4381-b3f6-a61770c11282"
                      >
                        8
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-e43b35a9-f95e-4318-a752-6fe365dde5b0"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-949cda24-6b33-4def-9fa2-ee66006a9499"
                      >
                        데이터 로딩을 위한 워커 스레드 수
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-b4ddb5cd-ef01-41d4-8704-266d11787af4"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-5684dfc8-8601-4ede-9812-f6c609c064de"
                      >
                        project
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-c448fd85-352c-4a67-95d5-e37790496b0c"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-c30985ff-be3d-4928-9245-956a9eff0a0a"
                      >
                        None
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-5393a7d6-b69d-4fe6-b4c5-b6f385a4933f"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-53296ce4-fa54-44b5-8642-778cd498c451"
                      >
                        프로젝트 이름
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-9ce878f8-8251-46fe-934d-75b863246f17"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-ac4eaaab-a8c6-48fb-b91a-7a0450f39ff8"
                      >
                        name
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-c6b475af-fa10-4e23-9029-8cd2e2ae45a8"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-755ee9b4-17ed-4f34-8b38-1bbbb2f0a960"
                      >
                        None
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-2f1799fa-2c2c-4aaa-b49e-c1746075e951"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-29b581a4-ec82-43ef-b257-a0b75ec35e13"
                      >
                        실험 이름
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-5c6fcca6-ed5e-4037-acdc-91a47dbeeaa2"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-1d8c5341-c019-4c03-b084-8d611f4a9c54"
                      >
                        exist_ok
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-8d78f779-e83f-4d68-bcea-bd225dec04b5"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-d8f70d61-678e-43b2-8be0-d101df340613"
                      >
                        False
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-2b16ec5b-3f71-4c11-bd63-f51780e13eff"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-5efa8afd-7c21-455d-a7a5-11aabb3af544"
                      >
                        기존 실험 덮어쓸지 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-04d3dcb3-7a25-4eda-97fa-deba09e3caa8"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-634ba6f6-a8ff-4ea2-9f78-506b4b287ce0"
                      >
                        pretrained
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-e16fbbd3-737c-4ce4-a255-a4f255aab28f"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-1d1da739-d7d1-4ff8-94d7-dacc5dc69526"
                      >
                        True
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-33230702-17da-4f51-9b60-b33e0cbbb907"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-ddd65862-dbff-4a43-8d58-29015d6c3bc2"
                      >
                        {" "}
                        사전 훈련된 모델 사용 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-397d8e6a-3e85-45db-92cf-e63c6383cf5b"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-3d3ce309-46dc-412d-a757-dacbd5aef7cb"
                      >
                        optimizer
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-be8de346-6bda-4562-835f-f9c847494176"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-b5390023-f58d-4214-a3b5-e311bc41b911"
                      >
                        'auto'
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-86acc74d-86ab-44c6-89cb-8e1f20f055d6"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-72e6c85f-6bc0-4608-8208-6da5f8fc6336"
                      >
                        사용할 옵티마이저
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-65f1ffcd-3cc6-43e2-908d-d1c70178fd73"
                      >
                        , choices=[SGD, Adam, Adamax, AdamW, NAdam, RAdam,
                        RMSProp, auto]
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-59a16c78-a97b-474e-9dc9-49f68a363f2a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-330fa89a-5078-4674-b998-0efbde3df5c3"
                      >
                        verbose
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-7695e4fd-c386-4e8e-91a6-4e1c6fd55446"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-168db2ea-a01b-41df-aea9-421e00faf6b8"
                      >
                        False
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-d2605af2-88c5-456e-9c45-1b89b750f7f1"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-e1591fbd-b16e-41bb-83f9-01e5febc0f7c"
                      >
                        자세한 출력 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-a62bffa4-299a-4a41-9851-47c1277ba805"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-efa78327-f21f-4ffe-a8d0-4ee02b8f9cf7"
                      >
                        seed
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-f8608773-7254-4274-a738-3b58df89720c"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-12db6eb0-e3e3-4fbc-bbc3-726c817afb97"
                      >
                        0
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-c0ab5be4-9f23-44ab-a96b-4fafab345285"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-c537f83f-cbce-4fe0-8fbe-4e88d980f415"
                      >
                        재현성을 위한 랜덤 시드
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-29049f14-0a2d-4488-aed2-eb7c6d1290fd"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-d3f4ddea-2540-407b-825f-aea08d18bb8b"
                      >
                        deterministic
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-69460763-91b6-4ec1-a827-a587c8ce64f4"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-3634ed13-fa6f-4c5c-9594-1f9b4550e510"
                      >
                        True
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-3534f5d9-d19b-4bcd-b19a-4eb6ea85b49d"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-f0ac7909-769a-4ea1-b174-57fe95adaab9"
                      >
                        결정론적 모드 사용 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-d061b7aa-e2e8-42f8-9048-bb40e0cbfa02"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-de6337c2-f3c0-4d7d-85f2-e765a09393d8"
                      >
                        single_cls
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-dac69870-5089-4993-91a8-481438ef4fe9"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-4797b2cc-6a9e-497c-bc7b-a941ba37b88a"
                      >
                        False
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-d0a29fe8-def7-4b47-b670-8d72cf7468f7"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-36644663-b007-40ba-9c3b-5c78838f4f43"
                      >
                        단일 클래스로 다중 클래스 데이터 훈련 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-1bb69c47-9e78-4f52-bf10-0ef546421415"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-8da497ea-08e6-48e2-818d-c11fccc8b079"
                      >
                        rect
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-247633b5-5e36-4406-8f63-53adc3c7d4fd"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-3d9fa1b7-4c0a-42b9-88d2-8140239f0d7a"
                      >
                        False
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-a1cd3be8-2e2a-45b3-bd25-d642b5c6ea9c"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-592104f3-6eec-4fd4-9630-badad65a632d"
                      >
                        최소 패딩을 위해 각 배치를 직사각형으로 정렬
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-6f0cc412-8dda-44b3-958b-09f282dde445"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-cd18b6ec-431c-4cd9-a019-f37bc0e9af27"
                      >
                        cos_lr
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-0678cbe1-cdd4-4d4f-a4e0-39e6d5fedd82"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-0b7698c0-da46-4b92-83d2-ab3f8b64e49a"
                      >
                        False
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-05d1e22f-6846-4605-9cfc-a547da1e83af"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-321c192b-2e28-49cf-b744-b0528dce1908"
                      >
                        코사인 학습률 스케줄 사용 여부.
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td class="se-cell" colspan="1" rowspan="1">
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-aec33b18-ab2e-4686-a055-eec2456b688a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-935a95b5-fe26-4879-a8fe-81c7ee28e3f4"
                      >
                        close_mosaic
                      </span>
                    </p>
                  </div>
                </td>
                <td class="se-cell" colspan="1" rowspan="1">
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-f775a03a-ba3d-4f15-b4a7-98914730f9a8"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-16c7a957-9563-46c8-859e-1c5861c9b60a"
                      >
                        10
                      </span>
                    </p>
                  </div>
                </td>
                <td class="se-cell" colspan="1" rowspan="1">
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-989637f2-3962-4093-b008-7ddac6d3ee34"
                    >
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-da4e1ce0-459e-4426-aadd-095cf772540e"
                      >
                        (int){" "}
                      </span>
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-bc50a09b-b810-456e-9b59-9c359842e232"
                      >
                        최종 에포크에 대한 모자이크 보강 비활성화
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-808c6e4e-d742-4072-a667-5eefa42d0627"
                      >
                        {" "}
                        (0 to disable)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-40aca957-387e-49ba-a99e-a5613dce8e77"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-37ccf424-19b5-42b7-8b1f-d42643a399d7"
                      >
                        resume
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-e01c7ff8-7871-4cda-8be0-218fe3c738fe"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-439f54e5-7759-43ba-8b89-fd4f89752abd"
                      >
                        False
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-cbd8f6a9-6eee-482f-8d8f-5de3e5cf53fe"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-284ec9a8-184b-46ca-ab03-d27dc80b44e6"
                      >
                        마지막 체크포인트에서 훈련 재개 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-40cd8444-61db-4008-8a8b-91aa4ef91c7a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-26588010-3544-43cd-8d4e-1b00c5947170"
                      >
                        amp
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-df9faa4a-3e1f-4c3a-9f33-aaf69235f373"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-aebd2814-65ce-4dd0-a242-0abf8db23171"
                      >
                        True
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-2277591a-8041-4a65-a4fa-d726d24c719d"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-092c7063-cfb0-41c5-bd5b-6b3837b63dae"
                      >
                        자동 혼합 정밀도(AMP) 훈련 사용 여부
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-eab8b7f7-39bf-41db-a305-c48190212a3f"
                      >
                        , choices=[True, False]
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-92a86be1-eb1c-4997-a223-4b67f54a3850"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-bf787aab-68ea-48b9-b78e-50605cdf90dd"
                      >
                        fraction
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-cc4086fe-6e3e-4f12-aec1-d2a898e18e6a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-6c9ea051-fc64-4db5-b05f-26103cc3dc56"
                      >
                        1.0
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-ba83132d-dbd7-44a4-b732-42e5d83f5c0e"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-b2999f21-aabd-481a-8e4f-5cb01dfb7f53"
                      >
                        훈련할 데이터 집합의 비율
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-39e68f18-403c-4a8b-8fe7-fcccd3bad87d"
                      >
                        {" "}
                        (default is 1.0, all images in train set)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-d6933929-e4b7-4868-8b7d-5bb8e3e2545b"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-ed4005ed-d6e9-438a-a7bd-c0d398b87fac"
                      >
                        profile
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-a64a0b72-27ce-4fc4-bd78-801d044c3cc6"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-c2bf70b4-4170-4183-b9dd-2a18323add4b"
                      >
                        False
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-684a2b68-ca16-4b6f-9d15-c07f4bf070bf"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-c1d04261-34d3-4c5b-9fce-cfa121df7b6a"
                      >
                        ONNX 및 TensorRT 속도를 위한 프로파일링 사용 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-e75b5086-383d-464a-b656-25ec76e7904a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-68693784-ee4a-44c9-91fb-ad842fe08b0f"
                      >
                        freeze
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-4e9990ab-e96a-4816-a7ff-50b34ba91a8e"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-8d869675-163c-44ca-bd22-e5e9f2befe40"
                      >
                        None
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-4f2097f2-93a8-48ba-b5b4-5f6fe662985e"
                    >
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-d9d8e0e6-4f5b-4682-bbea-39d6e615b8db"
                      >
                        (int or list, optional){" "}
                      </span>
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-370a5eb6-d97e-44bf-9071-96afbfbad7c0"
                      >
                        처음 n개 레이어 또는 레이어 인덱스를 훈련 중 동결
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-6fa72d29-a350-4b87-a20f-cc8f6bf92904"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-dc5313c9-e436-49ca-ae69-8614765d4104"
                      >
                        lr0
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-b76e0c89-1c7b-49e3-addc-ebaa56ee4ea0"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-2ae90b6f-7094-44d5-b1e8-834ec73d460f"
                      >
                        0.01
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-bc15f2c5-8957-4b42-aaab-e253612ac945"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-e9db10ff-cf1d-4a3b-a645-c03b88a08a51"
                      >
                        초기 학습률
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-92234712-1910-43be-be33-b1fc9853ba06"
                      >
                        {" "}
                        (i.e. SGD=1E-2, Adam=1E-3)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-7413d4fb-10cf-4f4c-80d4-4110ffbbd3c7"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-619b9ba5-ff2a-49d3-9296-5c37cfc89ce9"
                      >
                        lrf
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-a0cf5440-de89-4769-8a2b-eea8d9810a18"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-5600bf09-ba9b-4904-91e1-9869ac211ee4"
                      >
                        0.01
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-8c1a4524-88db-4fc3-8c6e-5ee2f4816196"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-6518393a-d345-4d5b-8252-48d1316dcfdf"
                      >
                        최종 학습률
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-a261edf9-fee7-42f3-87fa-4b9e005cc99f"
                      >
                        {" "}
                        (lr0 * lrf)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-24756bbc-0503-4c04-8796-82791fd7d9e4"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-ae68467c-8010-4078-8a82-a8ece04820c6"
                      >
                        momentum
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-38bd7774-97d1-4cac-8ad8-2a28811b14e0"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-52c25cdb-9920-4b46-985d-58ee5803991d"
                      >
                        0.937
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-df2bc318-fdee-47e7-9cf6-92e3e3f7bc19"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-c7ee751c-7eff-4021-8cef-04efb01eb15c"
                      >
                        SGD 모멘텀 / Adam beta1
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-758f2608-319b-40a8-aa13-bf193e57ff93"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-6cdac2e0-312c-4fd4-a331-b7f01d1a5242"
                      >
                        weight_decay
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-24aae43b-4fea-42a9-8bcc-a6640fd92af8"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-366cdd60-c06e-4498-ac38-94bde4e21bef"
                      >
                        0.0005
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-fd847152-dace-4fed-9d1e-2d56cd7924db"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-39ba5f6f-0b14-4031-ab57-94181620a6fb"
                      >
                        옵티마이저 가중치 감쇠
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-a47d56e8-50e3-43c0-955e-9bd2760d34f4"
                      >
                        {" "}
                        5e-4
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-dfbffa1c-5baa-43f4-817a-2cfff001baf9"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-43337acf-3e88-40a6-89b5-432d6b2a2764"
                      >
                        warmup_epochs
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-d4988eec-5f34-43b1-9e27-002fa0e8193a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-1d3fe290-5ebb-493f-8d63-2815b4fd5e88"
                      >
                        3.0
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-d3387a90-4581-4253-a70e-760c7f071d40"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-ff17d9b9-62b6-4647-a6a5-7306002c1163"
                      >
                        워마핑 에포크 수
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-8a8c269e-d072-4c13-90f1-0e085ef02fc0"
                      >
                        {" "}
                        (fractions ok)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-296b740d-acf2-4446-b1a5-05fc63ec988e"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-577d9a76-7d22-4050-b1c2-b07973d05167"
                      >
                        warmup_momentum
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-5411ad2f-ebf1-458f-af0a-3dccba83f325"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-8ea24b8b-e449-4161-bc77-0fc3401576e8"
                      >
                        0.8
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-e5e8a41c-1ee9-4311-bef8-8eb60eab9ec3"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-95549515-cc9c-440b-b78d-7170469ffab8"
                      >
                        워마핑 초기 모멘텀
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-dac5b65e-b610-42da-9748-57b0b093f1d6"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-4c01f379-60ba-45e1-b047-50eac11ded31"
                      >
                        warmup_bias_lr
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-019b3a6a-390c-410e-85d1-526a0239487c"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-23869c58-6098-4b0d-8df7-4164ff2b3605"
                      >
                        0.1
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-75f2c069-4036-4f07-9b4d-5d365ac88153"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-4b4b8e01-e331-4591-ace1-13cdd2e69d6a"
                      >
                        워마핑 초기 편향 학습률
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-2f09ec9d-4537-42d1-8db1-e6d9d29598c2"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-d05a9a66-3dc4-4d9c-8187-906e8218ee7a"
                      >
                        box
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-0783a7e8-4529-43e6-b5b3-719c805496a7"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-8f28fd1a-c602-43c4-9b16-ed84ca580056"
                      >
                        7.5
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-dacc4ed6-256b-4101-a356-cfaa73ba6a0b"
                    >
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-b2fd68c7-7d0a-4a9f-b34a-fc6b12da9abc"
                      >
                        box loss gain
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-c9e966d6-3064-46b2-a1ec-ed445b112fa9"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-eb677d46-52e3-4989-8532-9aca9777e294"
                      >
                        cls
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-684f7110-0f28-4bc7-90bf-af95aac9b7e0"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-0a68b70b-3075-4e60-b391-c20952f1d5ab"
                      >
                        0.5
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-8cfe8202-e18f-4387-af4e-082b3e7b288d"
                    >
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-77d5460e-285a-45b1-aebd-e561b3ad1d7d"
                      >
                        cls loss gain (scale with pixels)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-39bfa24b-0ee8-4ea1-a7c3-f4a00a55be2a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-146d6e52-c2b0-4240-bb69-2fbc7ee4f769"
                      >
                        dfl
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-eddc2ec0-a6eb-4fe9-97cc-5638c7ec862c"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-0889c8ef-a018-4fe3-b29e-a306bc8c2879"
                      >
                        1.5
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-f2acb5b1-7d67-4a82-a7ea-1fb249aa00e0"
                    >
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-d277ba17-2c43-47e2-b912-e8a9fa2f2609"
                      >
                        dfl loss gain
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-0c65c68e-aa79-4067-afc2-d9f6c08a6f72"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-6f126dee-e3d8-49ef-8853-eb23816ecb25"
                      >
                        pose
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-d67d71b5-c970-49dd-a318-16be60c74bae"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-b3cfc643-dc95-4f49-b945-74045996cddf"
                      >
                        12.0
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-91a31a32-402b-4a24-a5b1-c739e8f2b6d1"
                    >
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-2c60084f-0461-4035-9b4d-6f8ddbbc2367"
                      >
                        pose loss gain (pose-only)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-c8746f48-829c-49ed-8923-b55efe3d0c15"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-c96093ac-2e32-4a49-9d49-dccbc07b5b52"
                      >
                        kobj
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-cc08037d-8f89-44a2-93eb-c27d0a7bf40f"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-61ce2d22-629a-4f42-97ae-932acb4e7527"
                      >
                        2.0
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-d8bd35d1-07c0-41da-91f0-baa022fbe093"
                    >
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-d160eadb-9ab2-46d3-81d7-118c9d2819d0"
                      >
                        keypoint obj loss gain (pose-only)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-af8f3128-57ea-48f6-aa96-54f5465bfec2"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-90e16f72-d7c8-43e9-8838-d3ef0f838cf1"
                      >
                        label_smoothing
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-bce26c11-b393-4905-a2d3-33346c0f5d6c"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-86593bab-9713-47ef-9200-196d498ba8d3"
                      >
                        0.0
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-f07b5aec-a478-428f-8977-c9866b157cb2"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-8032e604-5723-4a5d-876f-164cd0d6da23"
                      >
                        라벨 스무딩 비율
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-e9a5ac35-9e15-4e92-ad70-ba44b86bb36e"
                      >
                        {" "}
                        (fraction)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-ffb0f1ac-ae7d-42a1-b9a5-acbad53c814a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-4f76f07f-2dd9-40da-a6b7-856835ddd042"
                      >
                        nbs
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-c8c65ef9-d8cc-4a87-8379-919fee36f2bc"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-f3ec52c0-cd5f-4848-a86e-2dc420eba200"
                      >
                        64
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-e34c01b2-a0e0-4647-8dcd-498248fec05e"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-31d9e05b-75a1-4ad2-8146-0af6396c86d8"
                      >
                        명목 배치 크기
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-592ce66e-e122-4d8c-9f37-dd89e6c9c5e6"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-1a1c2f93-97c8-4b0d-ae79-517fa1589ed9"
                      >
                        overlap_mask
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-4c6da022-a20d-4f92-89e7-26440cf4bf1e"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-522771b2-9342-4fc7-9bab-34c60f0168b2"
                      >
                        True
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-37e0c717-3b9a-4696-82d5-ac6ab049179b"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-ddd11f54-c21d-4193-a418-5554150538af"
                      >
                        훈련 중 마스크가 겹쳐져야 하는지 여부{" "}
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-0f16fe39-36b4-497e-8966-b4533fecab9c"
                      >
                        (segment train only)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-4fb86319-d80f-47c6-add7-416ce96a9926"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-137c07a4-3d0e-4c2d-a690-79655bf53b93"
                      >
                        mask_ratio
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-cec3653e-17fb-4b5d-aa19-3d0dd2b46b23"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-5d70cb2a-ce17-4efc-ba2e-a16ba99bc609"
                      >
                        4
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-a157b141-a5c1-40e3-9fb9-2adc75db4c60"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-e645e196-36dd-4557-b565-4c69eda2142c"
                      >
                        마스크 다운샘플 비율
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-cde1ff99-6ee5-46ce-8d34-925f37c0afa8"
                      >
                        {" "}
                        (segment train only)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-db1bed0b-44f8-4994-8d83-c5936e4ea611"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-122036ab-5c42-478f-a14d-35dd3bb7631f"
                      >
                        dropout
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-7bb04ee7-4620-4e32-9d1a-6bde4ee59acb"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-45b7b296-4e4b-423e-b027-35e5ff8b30fb"
                      >
                        0.0
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-fa415497-dc3e-40d9-9bdc-bd3911bb1fbb"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-f48d9350-015e-4e03-9d32-0bc32b96598e"
                      >
                        드롭아웃 정규화 사용 여부
                      </span>
                      <span
                        class="se-fs- se-ff-system  se-style-unset "
                        id="SE-54282bd8-7f9b-4f11-b1ef-0dde066def7c"
                      >
                        {" "}
                        (classify train only)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-049910c7-5369-4c29-a524-30e53f57812a"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-00021a45-cd9e-42ef-bdc7-931928bc0214"
                      >
                        val
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-09421015-6cc6-4213-a221-7ffb70baa9ae"
                    >
                      <span
                        class="se-fs-fs13 se-ff-system  se-style-unset "
                        id="SE-15b4b416-dc6b-40e5-9658-f6cb46f99c0e"
                      >
                        True
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align- "
                      id="SE-a17eda12-26a1-4d06-a76f-36f1d29bc6df"
                    >
                      <span
                        class="se-fs- se-ff-   "
                        id="SE-1ff7c55b-ab4e-4b60-8110-b6f709455db9"
                      >
                        훈련 중 검증/테스트 여부
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr class="se-tr">
                <td>
                  <div>
                    <p
                      class="se-text-paragraph se-text-paragraph-align-left "
                      id="SE-2b3e6981-eaf7-4eb0-a8c9-b7e75137779f"
                    >
                      <span>plots</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span>False</span>
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <span>훈련/검증 중 플롯 및 이미지 저장 여부</span>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
    </>
  );
}

export default Yolov8;
