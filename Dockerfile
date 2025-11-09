# ===== Stage 1: Build Angular Frontend =====
FROM node:18 AS frontend-build
WORKDIR /app/frontend

# Copy Angular project
COPY medicine-ordering-app/ .

# Install dependencies and build
RUN npm install && npm run build

# ===== Stage 2: Build Spring Boot Backend =====
FROM maven:3.9.5-eclipse-temurin-17 AS backend-build
WORKDIR /app

# Copy backend source
COPY pom.xml .
COPY src ./src

# Package the backend
RUN mvn clean package -DskipTests

# ===== Stage 3: Final Runtime Image =====
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy backend JAR from build stage
COPY --from=backend-build /app/target/*.jar app.jar

# Copy Angular build output to a static directory if your backend serves it
COPY --from=frontend-build /app/frontend/dist/ /app/public/

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
