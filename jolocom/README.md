# Installation

- Install `docker` and `docker-compose`
- Run `git submodule update --init --recursive` to initialize all
  submodules
- Run `./build.sh` (`sudo ./build.sh` if you need to gain super-user
  access rights)

# Usage

- Run `./start.sh` (`sudo ./start.sh` if you need to gain super-user
  access rights)

# Flow

@startuml

actor "User" as U
actor "Insurance" as I
database "Our Service" as S

U --> S: Send steps walked (ongoing)
I -> U: Request step count
U -> S: Request latest step count
S -> U: Share issued claim about steps walked
U -> I: Share claimed step count
I -> I: Validate claim
@enduml

// vi: ft=plantuml.markdown:tw=72:sw=4:ts=4:sts=4:et
